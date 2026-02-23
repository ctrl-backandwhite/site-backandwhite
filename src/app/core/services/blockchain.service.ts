import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ethers } from 'ethers';
import Swal from 'sweetalert2';

export interface BlockchainTransaction {
  color: string;
  icon: string;
  name: string;
  date: string;
  text: string;
  price: string;
  type: 'buy' | 'sell' | 'transfer';
  hash?: string;
  from?: string;
  to?: string;
}

export interface WalletBalance {
  nativeSymbol: string;
  btcSymbol: string;
  usdtSymbol: string;
  nativeBalance: string;
  nativeBalanceUSD: string;
  btcBalance: string;
  btcBalanceUSD: string;
  usdtBalance: string;
  usdtBalanceUSD: string;
  totalBalance: string;
  income: string;
  expense: string;
  trend: number;
}

export interface WalletTokenBalance {
  address: string;
  symbol: string;
  name: string;
  decimals: number;
  balance: string;
}

export interface SwapToken {
  address: string;
  symbol: string;
  name: string;
  decimals: number | null;
  logo?: string;
  isNative?: boolean;
  isCustom?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  private transactionsSubject = new BehaviorSubject<BlockchainTransaction[]>([]);
  public transactions$ = this.transactionsSubject.asObservable();

  private tokenBalancesSubject = new BehaviorSubject<WalletTokenBalance[]>([]);
  public tokenBalances$ = this.tokenBalancesSubject.asObservable();

  private walletBalanceSubject = new BehaviorSubject<WalletBalance | null>(null);
  public walletBalance$ = this.walletBalanceSubject.asObservable();

  private metamaskProvider: any;
  private connectedAddress: string | null = null;
  private nativePrice = 0;
  private btcPrice = 0;
  private usdtPrice = 1;
  private readonly bscscanBaseUrl = environment.etherscanApiBaseUrl;
  private readonly bscscanApiKey = environment.bscscanApiKey || '';
  private readonly bscChainId = '0x38';
  private readonly bscChainIdDecimal = '56';
  private readonly maxTokenBalances = 20;
  private readonly routerAddress = '0x10ED43C718714eb63d5aA57B78B54704E256024E';
  private readonly wbnbAddress = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';
  private readonly bscConfig = {
    nativeSymbol: 'BNB',
    nativePriceSymbol: 'BNBUSDT',
    btcSymbol: 'BTCB',
    btcAddress: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    btcDecimals: 18,
    usdtSymbol: 'USDT',
    usdtAddress: '0x55d398326f99059fF775485246999027B3197955',
    usdtDecimals: 18
  };
  private readonly routerAbi = [
    'function getAmountsOut(uint256 amountIn, address[] path) view returns (uint256[] amounts)',
    'function swapExactETHForTokens(uint256 amountOutMin, address[] path, address to, uint256 deadline) payable returns (uint256[] amounts)',
    'function swapExactTokensForETH(uint256 amountIn, uint256 amountOutMin, address[] path, address to, uint256 deadline) returns (uint256[] amounts)',
    'function swapExactTokensForTokens(uint256 amountIn, uint256 amountOutMin, address[] path, address to, uint256 deadline) returns (uint256[] amounts)'
  ];
  private readonly erc20Abi = [
    'function symbol() view returns (string)',
    'function name() view returns (string)',
    'function decimals() view returns (uint8)',
    'function balanceOf(address owner) view returns (uint256)',
    'function allowance(address owner, address spender) view returns (uint256)',
    'function approve(address spender, uint256 amount) returns (bool)'
  ];
  private topTokensCache: SwapToken[] = [];
  private topTokensLoadedAt = 0;
  private tokenListCache = new Map<string, { symbol: string; name: string; decimals: number }>();
  private tokenListLoadedAt = 0;

  constructor() {
    this.initializeMetamask();
  }

  /**
   * Normalize address with correct checksum
   */
  private normalizeAddress(address: string): string {
    try {
      return ethers.getAddress(address);
    } catch (error) {
      console.error(`Dirección inválida: ${address}`, error);
      return address;
    }
  }

  /**
   * Initialize Metamask provider
   */
  private initializeMetamask() {
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      this.metamaskProvider = (window as any).ethereum;
      console.log('Proveedor Metamask inicializado');
      this.setupMetamaskListeners();

      // Check if already connected
      this.checkConnectedAccount();
    } else {
      console.warn('Proveedor Metamask no encontrado');
    }
  }

  /**
   * Check if wallet is already connected
   */
  private checkConnectedAccount() {
    if (!this.metamaskProvider) {
      console.warn('MetaMask no disponible - no se puede verificar cuenta conectada');
      return;
    }

    this.metamaskProvider.request({
      method: 'eth_accounts'
    }).then((accounts: string[]) => {
      if (accounts && accounts.length > 0) {
        this.connectedAddress = accounts[0];
        console.log('✅ Billetera ya conectada:', this.connectedAddress);
        this.fetchWalletBalance(this.connectedAddress);
        this.fetchTransactions(this.connectedAddress);
        this.fetchTokenBalances(this.connectedAddress);
      } else {
        console.log('ℹ️ No hay billetera conectada. Por favor conecta MetaMask para ver transacciones.');
      }
    }).catch((error: any) => {
      console.warn('No se pudo verificar la cuenta conectada:', error);
    });
  }

  /**
   * Setup listeners for Metamask account and chain changes
   */
  private setupMetamaskListeners() {
    if (!this.metamaskProvider) return;

    // Listen to account changes
    this.metamaskProvider.on('accountsChanged', (accounts: string[]) => {
      if (accounts.length > 0) {
        this.connectedAddress = accounts[0];
        this.fetchTransactions(accounts[0]);
        this.fetchWalletBalance(accounts[0]);
        this.fetchTokenBalances(accounts[0]);
      } else {
        this.connectedAddress = null;
        this.transactionsSubject.next([]);
        this.tokenBalancesSubject.next([]);
        this.walletBalanceSubject.next(null);
      }
    });

    // Listen to chain changes
    this.metamaskProvider.on('chainChanged', () => {
      if (this.connectedAddress) {
        this.fetchTransactions(this.connectedAddress);
        this.fetchWalletBalance(this.connectedAddress);
      }
    });
  }

  /**
   * Get connected wallet address
   */
  getConnectedAddress(): string | null {
    return this.connectedAddress;
  }

  /**
   * Set connected wallet address
   */
  setConnectedAddress(address: string) {
    this.connectedAddress = address;
    this.fetchTransactions(address);
    this.fetchWalletBalance(address);
    this.fetchTokenBalances(address);
  }

  /**
   * Fetch wallet balance for a given address
   */
  private fetchWalletBalance(address: string) {
    if (!this.metamaskProvider) {
      console.warn('Proveedor Metamask no disponible');
      this.walletBalanceSubject.next(null);
      return;
    }

    // Validate address format
    if (!address || address.length !== 42) {
      console.warn('Dirección Ethereum inválida:', address);
      this.walletBalanceSubject.next(null);
      return;
    }

    // Call eth_getBalance to get ETH balance
    this.loadBscWalletBalance(address).catch((error: any) => {
      console.error('Error al obtener saldo de billetera desde Metamask:', error);
      this.walletBalanceSubject.next(null);
    });
  }

  private fetchTransactions(address: string) {
    if (!this.bscscanApiKey) {
      console.error('❌ Clave API de BscScan no configurada en archivo de entorno');
      this.transactionsSubject.next([]);
      return;
    }

    console.log('🔄 Obteniendo transacciones para dirección:', address);

    this.loadBscTransactions(address).catch((error: any) => {
      console.error('❌ Error al obtener transacciones desde BscScan:', error);
      this.transactionsSubject.next([]);
    });
  }

  private fetchTokenBalances(address: string) {
    if (!this.bscscanApiKey) {
      console.error('❌ Clave API de Etherscan no configurada en archivo de entorno');
      this.tokenBalancesSubject.next([]);
      return;
    }

    this.loadBscTokenBalances(address).catch((error: any) => {
      console.error('❌ Error al obtener balances de tokens desde Etherscan:', error);
      this.tokenBalancesSubject.next([]);
    });
  }

  private async loadBscWalletBalance(address: string) {
    await this.fetchBscPrices();

    const [nativeBalanceWei, btcBalanceWei, usdtBalanceWei] = await Promise.all([
      this.getNativeBalanceWei(address),
      this.getErc20BalanceWei(address, this.bscConfig.btcAddress),
      this.getErc20BalanceWei(address, this.bscConfig.usdtAddress)
    ]);

    const nativeBalance = this.formatUnits(nativeBalanceWei, 18, 6);
    const btcBalance = this.formatUnits(btcBalanceWei, this.bscConfig.btcDecimals, 6);
    const usdtBalance = this.formatUnits(usdtBalanceWei, this.bscConfig.usdtDecimals, 6);

    const nativeBalanceNumber = Number(nativeBalance);
    const btcBalanceNumber = Number(btcBalance);
    const usdtBalanceNumber = Number(usdtBalance);

    if (
      !Number.isFinite(nativeBalanceNumber) ||
      !Number.isFinite(btcBalanceNumber) ||
      !Number.isFinite(usdtBalanceNumber)
    ) {
      console.warn('Valores de saldo inválidos desde Metamask');
      this.walletBalanceSubject.next(null);
      return;
    }

    const nativeBalanceUSD = nativeBalanceNumber * this.nativePrice;
    const btcBalanceUSD = btcBalanceNumber * this.btcPrice;
    const usdtBalanceUSD = usdtBalanceNumber * this.usdtPrice;
    const totalBalanceUSD = nativeBalanceUSD + btcBalanceUSD + usdtBalanceUSD;

    const walletBalance: WalletBalance = {
      nativeSymbol: this.bscConfig.nativeSymbol,
      btcSymbol: this.bscConfig.btcSymbol,
      usdtSymbol: this.bscConfig.usdtSymbol,
      nativeBalance,
      nativeBalanceUSD: nativeBalanceUSD.toFixed(2),
      btcBalance,
      btcBalanceUSD: btcBalanceUSD.toFixed(2),
      usdtBalance,
      usdtBalanceUSD: usdtBalanceUSD.toFixed(2),
      totalBalance: totalBalanceUSD.toFixed(2),
      income: (totalBalanceUSD * 0.15).toFixed(2),
      expense: (totalBalanceUSD * 0.08).toFixed(2),
      trend: 2.5
    };

    console.log('Saldo de billetera obtenido exitosamente:', walletBalance);
    this.walletBalanceSubject.next(walletBalance);
  }

  private async loadBscTransactions(address: string) {
    try {
      await this.fetchBscPrices();

      const normalUrl = `${this.bscscanBaseUrl}?chainid=${this.bscChainIdDecimal}&module=account&action=txlist&address=${address}`
        + '&startblock=0&endblock=99999999&sort=asc'
        + `&apikey=${this.bscscanApiKey}`;
      const internalUrl = `${this.bscscanBaseUrl}?chainid=${this.bscChainIdDecimal}&module=account&action=txlistinternal&address=${address}`
        + '&startblock=0&endblock=99999999&sort=asc'
        + `&apikey=${this.bscscanApiKey}`;

      console.log('📡 Llamando a API Etherscan v2 para transacciones BSC (chainid 56) - dirección:', address);
      console.log('🔗 URL API (normal):', normalUrl.replace(this.bscscanApiKey, 'CLAVE_API_OCULTA'));
      console.log('🔗 URL API (interno):', internalUrl.replace(this.bscscanApiKey, 'CLAVE_API_OCULTA'));

      const [normalRes, internalRes] = await Promise.all([fetch(normalUrl), fetch(internalUrl)]);
      if (!normalRes.ok && !internalRes.ok) {
        console.error('❌ Error HTTP:', normalRes.status, normalRes.statusText);
        this.transactionsSubject.next([]);
        return;
      }

      const [normalData, internalData] = await Promise.all([
        normalRes.ok ? normalRes.json() : Promise.resolve(null),
        internalRes.ok ? internalRes.json() : Promise.resolve(null)
      ]);

      const normalItems = Array.isArray(normalData?.result) ? normalData.result : [];
      const internalItems = Array.isArray(internalData?.result) ? internalData.result : [];

      if (normalItems.length === 0 && internalItems.length === 0) {
        console.warn('⚠️ No se encontraron transacciones o error de API.');
        console.warn('   Estado normal:', normalData?.status, 'mensaje:', normalData?.message);
        console.warn('   Estado interno:', internalData?.status, 'mensaje:', internalData?.message);
        this.transactionsSubject.next([]);
        return;
      }

      const addressLower = address.toLowerCase();
      const mapToTransaction = (tx: any, source: 'normal' | 'internal'): BlockchainTransaction => {
        const isOutgoing = (tx.from || '').toLowerCase() === addressLower;
        const valueWei = tx.value ? BigInt(tx.value) : 0n;
        const value = this.formatUnits(valueWei, 18, 6);
        const valueNumber = Number(value);
        const valueUSD = Number.isFinite(valueNumber) ? valueNumber * this.nativePrice : 0;
        const sign = isOutgoing ? '-' : '+';
        const name = valueWei === 0n
          ? 'Contract Interaction'
          : source === 'internal'
            ? 'Internal Transfer'
            : 'BNB Transfer';

        return {
          color: isOutgoing ? 'danger' : 'success',
          icon: isOutgoing ? 'bx-send' : 'bx-download',
          name,
          date: this.formatDate(new Date(Number(tx.timeStamp) * 1000)),
          text: isOutgoing ? 'Sent' : 'Received',
          price: `${sign} $ ${valueUSD.toFixed(2)}`,
          type: isOutgoing ? 'sell' : 'buy',
          hash: tx.hash,
          from: tx.from,
          to: tx.to
        } as BlockchainTransaction;
      };

      const combinedRaw = [
        ...normalItems.map((tx: any) => ({ tx, source: 'normal' as const })),
        ...internalItems.map((tx: any) => ({ tx, source: 'internal' as const }))
      ].sort((a, b) => Number(b.tx?.timeStamp || 0) - Number(a.tx?.timeStamp || 0));

      const unique = new Map<string, BlockchainTransaction>();
      combinedRaw.forEach(item => {
        const mapped = mapToTransaction(item.tx, item.source);
        const key = `${mapped.hash}-${mapped.from}-${mapped.to}-${mapped.price}-${mapped.date}`;
        if (!unique.has(key)) {
          unique.set(key, mapped);
        }
      });

      const transactions = Array.from(unique.values());

      console.log(`✅ Se cargaron exitosamente ${transactions.length} transacciones desde BscScan`);
      this.transactionsSubject.next(transactions);
    } catch (error: any) {
      console.error('❌ Error fatal al cargar transacciones:', error);
      console.error('   Nombre del error:', error?.name);
      console.error('   Mensaje del error:', error?.message);
      console.error('   Stack trace:', error?.stack);
      this.transactionsSubject.next([]);
    }
  }

  private async loadBscTokenBalances(address: string) {
    const url = `${this.bscscanBaseUrl}?chainid=${this.bscChainIdDecimal}&module=account&action=tokentx&address=${address}`
      + '&startblock=0&endblock=99999999&sort=asc'
      + `&apikey=${this.bscscanApiKey}`;

    const response = await fetch(url);
    if (!response.ok) {
      this.tokenBalancesSubject.next([]);
      return;
    }

    const data = await response.json();
    if (data?.status !== '1' || !Array.isArray(data.result)) {
      this.tokenBalancesSubject.next([]);
      return;
    }

    const tokenList = await this.getPancakeTokenList();
    const uniqueContracts = new Set<string>();
    data.result.forEach((tx: any) => {
      const contractAddress = String(tx?.contractAddress || '').toLowerCase();
      if (contractAddress && tokenList.has(contractAddress)) {
        uniqueContracts.add(contractAddress);
      }
    });

    const candidates = Array.from(uniqueContracts).slice(0, 200);
    const balanceResults = await Promise.all(candidates.map(async contractAddress => {
      const meta = tokenList.get(contractAddress);
      if (!meta) {
        return null;
      }

      const balanceWei = await this.getErc20BalanceWei(address, contractAddress);
      if (balanceWei <= 0n) {
        return null;
      }

      return {
        address: contractAddress,
        symbol: meta.symbol,
        name: meta.name,
        decimals: meta.decimals,
        balance: this.formatUnits(balanceWei, meta.decimals, 6),
        balanceWei
      };
    }));

    const tokenBalances = balanceResults
      .filter((entry): entry is { address: string; symbol: string; name: string; decimals: number; balance: string; balanceWei: bigint } => Boolean(entry))
      .sort((a, b) => (a.balanceWei > b.balanceWei ? -1 : a.balanceWei < b.balanceWei ? 1 : 0))
      .slice(0, this.maxTokenBalances)
      .map(({ balanceWei, ...rest }) => rest);

    this.tokenBalancesSubject.next(tokenBalances);
  }

  private async getPancakeTokenList(): Promise<Map<string, { symbol: string; name: string; decimals: number }>> {
    const now = Date.now();
    if (this.tokenListCache.size > 0 && now - this.tokenListLoadedAt < 30 * 60 * 1000) {
      return this.tokenListCache;
    }

    try {
      const response = await fetch('https://tokens.pancakeswap.finance/pancakeswap-extended.json');
      const listData = await response.json();
      const listTokens: any[] = Array.isArray(listData?.tokens) ? listData.tokens : [];

      const nextMap = new Map<string, { symbol: string; name: string; decimals: number }>();
      listTokens.forEach(item => {
        if (item?.address && item?.symbol) {
          const decimals = typeof item.decimals === 'number' ? item.decimals : 18;
          nextMap.set(String(item.address).toLowerCase(), {
            symbol: String(item.symbol).toUpperCase(),
            name: String(item.name || item.symbol),
            decimals
          });
        }
      });

      this.tokenListCache = nextMap;
      this.tokenListLoadedAt = now;
    } catch (error) {
      console.warn('Fallo al cargar lista de tokens de PancakeSwap', error);
    }

    return this.tokenListCache;
  }

  async getTokenBySymbol(symbol: string): Promise<SwapToken | null> {
    const needle = symbol.trim().toUpperCase();
    if (!needle) {
      return null;
    }

    const tokenList = await this.getPancakeTokenList();
    for (const [address, meta] of tokenList.entries()) {
      if (meta.symbol === needle) {
        return {
          address,
          symbol: meta.symbol,
          name: meta.name,
          decimals: meta.decimals
        } as SwapToken;
      }
    }

    return null;
  }

  async getSwapTokens(): Promise<SwapToken[]> {
    const now = Date.now();
    if (this.topTokensCache.length > 0 && now - this.topTokensLoadedAt < 10 * 60 * 1000) {
      return this.topTokensCache;
    }

    const nativeToken: SwapToken = {
      address: this.normalizeAddress(this.wbnbAddress),
      symbol: this.bscConfig.nativeSymbol,
      name: this.bscConfig.nativeSymbol,
      decimals: 18,
      logo: 'https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png',
      isNative: true
    };

    const tokens: SwapToken[] = [nativeToken];

    try {
      const [marketsRes, listRes] = await Promise.all([
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'),
        fetch('https://tokens.pancakeswap.finance/pancakeswap-extended.json')
      ]);

      const marketData = await marketsRes.json();
      const listData = await listRes.json();
      const listTokens: any[] = Array.isArray(listData?.tokens) ? listData.tokens : [];

      const listBySymbol = new Map<string, SwapToken>();
      listTokens.forEach(item => {
        if (item?.symbol && item?.address) {
          listBySymbol.set(String(item.symbol).toUpperCase(), {
            address: item.address,
            symbol: String(item.symbol).toUpperCase(),
            name: item.name || item.symbol,
            decimals: typeof item.decimals === 'number' ? item.decimals : null,
            logo: item.logoURI
          });
        }
      });

      // Add tokens matching CoinGecko top 100 (prioritized by market cap)
      if (Array.isArray(marketData)) {
        marketData.forEach((item: any) => {
          const symbol = String(item?.symbol || '').toUpperCase();
          const token = listBySymbol.get(symbol);
          if (!token) {
            return;
          }
          tokens.push({
            ...token,
            name: item?.name || token.name,
            logo: item?.image || token.logo
          });
        });
      }

      // If we have less than 50, add more from PancakeSwap list
      if (tokens.length < 50) {
        const addedSymbols = new Set(tokens.map(t => t.symbol));
        for (const token of listBySymbol.values()) {
          if (!addedSymbols.has(token.symbol)) {
            tokens.push(token);
            if (tokens.length >= 50) break;
          }
        }
      }
    } catch (error) {
      console.warn('Fallo al obtener tokens principales, usando lista en caché', error);
      if (this.topTokensCache.length > 0) {
        return this.topTokensCache;
      }
    }

    this.topTokensCache = tokens;
    this.topTokensLoadedAt = now;
    return tokens;
  }

  async getTokenMetadata(address: string): Promise<SwapToken> {
    if (!this.metamaskProvider) {
      throw new Error('Proveedor Metamask no disponible');
    }

    const checksum = ethers.getAddress(address);
    const provider = new ethers.BrowserProvider(this.metamaskProvider);
    const contract = new ethers.Contract(checksum, this.erc20Abi, provider);

    const [symbol, name, decimals] = await Promise.all([
      contract.symbol().catch(() => this.readErc20String(checksum, 'symbol')),
      contract.name().catch(() => this.readErc20String(checksum, 'name')),
      contract.decimals().catch(() => this.readErc20Decimals(checksum))
    ]);

    return {
      address: checksum,
      symbol: symbol || 'TOKEN',
      name: name || symbol || checksum,
      decimals: Number(decimals)
    };
  }

  async getSwapQuote(params: {
    fromToken: SwapToken;
    toToken: SwapToken;
    amountIn: string;
    slippageBps: number;
  }): Promise<{ amountOut: string; amountOutMin: string; symbol: string }> {
    if (!this.metamaskProvider) {
      throw new Error('Proveedor Metamask no disponible');
    }

    const provider = new ethers.BrowserProvider(this.metamaskProvider);
    const chainId = await provider.send('eth_chainId', []);
    if (chainId !== this.bscChainId) {
      throw new Error('Red incorrecta. Por favor cambia a BSC.');
    }

    const fromToken = await this.enrichToken(params.fromToken);
    const toToken = await this.enrichToken(params.toToken);

    const path = [
      this.normalizeAddress(fromToken.isNative ? this.wbnbAddress : fromToken.address),
      this.normalizeAddress(toToken.isNative ? this.wbnbAddress : toToken.address)
    ];

    const router = new ethers.Contract(this.normalizeAddress(this.routerAddress), this.routerAbi, provider);
    const amountInStr = String(params.amountIn).trim();
    if (!amountInStr || isNaN(Number(amountInStr))) {
      throw new Error(`Invalid amount: ${params.amountIn}`);
    }
    const amountInWei = ethers.parseUnits(amountInStr, fromToken.decimals || 18);
    const amountsOut = await router.getAmountsOut(amountInWei, path);
    const amountOut = amountsOut[amountsOut.length - 1];
    const slippage = BigInt(params.slippageBps);
    const amountOutMin = amountOut - (amountOut * slippage) / 10000n;

    return {
      amountOut: this.formatDisplayAmount(
        ethers.formatUnits(amountOut, toToken.decimals || 18),
        6
      ),
      amountOutMin: this.formatDisplayAmount(
        ethers.formatUnits(amountOutMin, toToken.decimals || 18),
        6
      ),
      symbol: toToken.symbol
    };
  }

  async getSwapQuoteByAmountOut(params: {
    fromToken: SwapToken;
    toToken: SwapToken;
    amountOut: string;
    slippageBps: number;
  }): Promise<{ amountIn: string; amountInMax: string; symbol: string }> {
    if (!this.metamaskProvider) {
      throw new Error('Proveedor Metamask no disponible');
    }

    const provider = new ethers.BrowserProvider(this.metamaskProvider);
    const chainId = await provider.send('eth_chainId', []);
    if (chainId !== this.bscChainId) {
      throw new Error('Red incorrecta. Por favor cambia a BSC.');
    }

    const fromToken = await this.enrichToken(params.fromToken);
    const toToken = await this.enrichToken(params.toToken);

    const path = [
      this.normalizeAddress(fromToken.isNative ? this.wbnbAddress : fromToken.address),
      this.normalizeAddress(toToken.isNative ? this.wbnbAddress : toToken.address)
    ];

    const router = new ethers.Contract(this.normalizeAddress(this.routerAddress), this.routerAbi, provider);
    const amountOutStr = String(params.amountOut).trim();
    if (!amountOutStr || isNaN(Number(amountOutStr))) {
      throw new Error(`Invalid amount: ${params.amountOut}`);
    }
    const amountOutWei = ethers.parseUnits(amountOutStr, toToken.decimals || 18);
    const amountsIn = await router.getAmountsIn(amountOutWei, path);
    const amountIn = amountsIn[0];
    const slippage = BigInt(params.slippageBps);
    const amountInMax = amountIn + (amountIn * slippage) / 10000n;

    return {
      amountIn: this.formatDisplayAmount(
        ethers.formatUnits(amountIn, fromToken.decimals || 18),
        6
      ),
      amountInMax: this.formatDisplayAmount(
        ethers.formatUnits(amountInMax, fromToken.decimals || 18),
        6
      ),
      symbol: fromToken.symbol
    };
  }

  async swapTokens(params: {
    fromToken: SwapToken;
    toToken: SwapToken;
    amountIn: string;
    slippageBps: number;
    deadlineMinutes: number;
  }): Promise<string> {
    if (!this.metamaskProvider) {
      throw new Error('Proveedor Metamask no disponible');
    }

    const provider = new ethers.BrowserProvider(this.metamaskProvider);
    const chainId = await provider.send('eth_chainId', []);
    if (chainId !== this.bscChainId) {
      throw new Error('Red incorrecta. Por favor cambia a BSC.');
    }

    const signer = await provider.getSigner();
    const account = await signer.getAddress();

    const fromToken = await this.enrichToken(params.fromToken);
    const toToken = await this.enrichToken(params.toToken);

    const path = [
      this.normalizeAddress(fromToken.isNative ? this.wbnbAddress : fromToken.address),
      this.normalizeAddress(toToken.isNative ? this.wbnbAddress : toToken.address)
    ];

    const router = new ethers.Contract(this.normalizeAddress(this.routerAddress), this.routerAbi, signer);

    // Validate and convert amountIn to string
    const amountInStr = String(params.amountIn).trim();
    if (!amountInStr || isNaN(Number(amountInStr))) {
      throw new Error(`Cantidad inválida: ${params.amountIn}`);
    }

    const amountInWei = ethers.parseUnits(amountInStr, fromToken.decimals || 18);
    const amountsOut = await router.getAmountsOut(amountInWei, path);
    const amountOut = amountsOut[amountsOut.length - 1];
    const slippage = BigInt(params.slippageBps);
    const amountOutMin = amountOut - (amountOut * slippage) / 10000n;
    const deadline = Math.floor(Date.now() / 1000) + params.deadlineMinutes * 60;

    // Check balance and approve if needed (for non-native tokens)
    if (!fromToken.isNative) {
      const tokenContract = new ethers.Contract(this.normalizeAddress(fromToken.address), this.erc20Abi, signer);

      try {
        // Verify user has sufficient balance
        const balance = await tokenContract.balanceOf(account);
        console.log(`💰 Balance del token ${fromToken.symbol}:`, ethers.formatUnits(balance, fromToken.decimals || 18));
        console.log(`📊 Cantidad requerida:`, ethers.formatUnits(amountInWei, fromToken.decimals || 18));

        if (balance < amountInWei) {
          const balanceFormatted = ethers.formatUnits(balance, fromToken.decimals || 18);
          const requiredFormatted = ethers.formatUnits(amountInWei, fromToken.decimals || 18);

          await Swal.fire({
            icon: 'error',
            title: 'Balance Insuficiente',
            html: `
              <p>No tienes suficientes tokens para realizar este swap.</p>
              <div style="margin-top: 15px; padding: 10px; background: #f8f9fa; border-radius: 5px;">
                <p style="margin: 5px 0;"><strong>Tu balance:</strong> ${balanceFormatted} ${fromToken.symbol}</p>
                <p style="margin: 5px 0;"><strong>Cantidad requerida:</strong> ${requiredFormatted} ${fromToken.symbol}</p>
              </div>
            `,
            confirmButtonText: 'Entendido'
          });

          throw new Error(`Balance insuficiente: ${balanceFormatted} ${fromToken.symbol}`);
        }

        // Check and approve allowance
        const allowance = await tokenContract.allowance(account, this.normalizeAddress(this.routerAddress));
        console.log(`🔓 Allowance actual:`, ethers.formatUnits(allowance, fromToken.decimals || 18));

        if (allowance < amountInWei) {
          // Show approval confirmation
          const approveConfirm = await Swal.fire({
            icon: 'info',
            title: 'Aprobación Requerida',
            html: `
              <p>Necesitas aprobar el uso de tus tokens <strong>${fromToken.symbol}</strong> antes de hacer el swap.</p>
              <p style="margin-top: 10px; color: #6c757d;">Esto es un paso único por token. Confirma la transacción en MetaMask.</p>
            `,
            showCancelButton: true,
            confirmButtonText: 'Aprobar Ahora',
            cancelButtonText: 'Cancelar',
            showLoaderOnConfirm: true,
            preConfirm: async () => {
              try {
                console.log(`⏳ Aprobando ${fromToken.symbol} para el router...`);
                const approveTx = await tokenContract.approve(this.normalizeAddress(this.routerAddress), ethers.MaxUint256);
                console.log(`📤 Transacción de aprobación enviada:`, approveTx.hash);

                // Show processing dialog
                Swal.fire({
                  icon: 'info',
                  title: 'Procesando Aprobación',
                  html: `
                    <p>Esperando confirmación en la blockchain...</p>
                    <p style="margin-top: 10px; font-size: 12px; color: #6c757d;">Hash: ${approveTx.hash.substring(0, 20)}...</p>
                  `,
                  showConfirmButton: false,
                  allowOutsideClick: false
                });

                const receipt = await approveTx.wait();
                console.log(`✅ Aprobación confirmada en el bloque:`, receipt.blockNumber);

                // Verify approval was successful
                const newAllowance = await tokenContract.allowance(account, this.normalizeAddress(this.routerAddress));
                if (newAllowance < amountInWei) {
                  throw new Error('La aprobación falló. Por favor intenta nuevamente.');
                }

                await Swal.fire({
                  icon: 'success',
                  title: 'Aprobación Exitosa',
                  text: 'Ahora puedes proceder con el swap',
                  timer: 2000,
                  showConfirmButton: false
                });

                return true;
              } catch (error: any) {
                Swal.showValidationMessage(`Error: ${error?.message || 'Aprobación fallida'}`);
                return false;
              }
            },
            allowOutsideClick: () => !Swal.isLoading()
          });

          if (!approveConfirm.isConfirmed || !approveConfirm.value) {
            throw new Error('Aprobación cancelada por el usuario');
          }
        } else {
          console.log(`✅ Ya hay suficiente allowance para este swap`);
        }
      } catch (error: any) {
        // If it's already a formatted error from above, just re-throw
        if (error.message?.includes('Balance insuficiente') || error.message?.includes('cancelada')) {
          throw error;
        }

        // Otherwise show generic error
        await Swal.fire({
          icon: 'error',
          title: 'Error al Verificar Token',
          text: error?.message || 'No se pudo verificar el balance o aprobación del token',
          confirmButtonText: 'Entendido'
        });

        throw error;
      }
    }

    // Execute the swap
    try {
      // Show confirmation dialog
      const swapConfirm = await Swal.fire({
        icon: 'question',
        title: 'Confirmar Swap',
        html: `
          <div style="text-align: left; padding: 10px;">
            <p style="margin: 10px 0;"><strong>De:</strong> ${params.amountIn} ${fromToken.symbol}</p>
            <p style="margin: 10px 0;"><strong>A (estimado):</strong> ${ethers.formatUnits(amountOut, toToken.decimals || 18)} ${toToken.symbol}</p>
            <p style="margin: 10px 0;"><strong>Mínimo a recibir:</strong> ${ethers.formatUnits(amountOutMin, toToken.decimals || 18)} ${toToken.symbol}</p>
            <p style="margin: 15px 0 10px; color: #6c757d; font-size: 14px;">Confirma la transacción en MetaMask</p>
          </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Confirmar Swap',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#28a745'
      });

      if (!swapConfirm.isConfirmed) {
        throw new Error('Swap cancelado por el usuario');
      }

      let tx;
      if (fromToken.isNative) {
        tx = await router.swapExactETHForTokens(amountOutMin, path, account, deadline, { value: amountInWei });
      } else if (toToken.isNative) {
        tx = await router.swapExactTokensForETH(amountInWei, amountOutMin, path, account, deadline);
      } else {
        tx = await router.swapExactTokensForTokens(amountInWei, amountOutMin, path, account, deadline);
      }

      // Show processing dialog
      Swal.fire({
        icon: 'info',
        title: 'Swap en Proceso',
        html: `
          <p>Esperando confirmación en la blockchain...</p>
          <p style="margin-top: 10px; font-size: 12px; color: #6c757d;">Hash: ${tx.hash.substring(0, 20)}...</p>
          <a href="https://bscscan.com/tx/${tx.hash}" target="_blank" style="font-size: 12px;">Ver en BscScan</a>
        `,
        showConfirmButton: false,
        allowOutsideClick: false
      });

      // Wait for confirmation
      await tx.wait();

      this.addLocalSwapTransaction({
        hash: tx.hash,
        fromToken,
        toToken,
        amountIn: params.amountIn,
        account
      });

      // Show success
      await Swal.fire({
        icon: 'success',
        title: '¡Swap Exitoso!',
        html: `
          <p>Tu swap se completó correctamente</p>
          <a href="https://bscscan.com/tx/${tx.hash}" target="_blank" style="font-size: 14px; margin-top: 10px; display: inline-block;">Ver transacción en BscScan</a>
        `,
        confirmButtonText: 'Perfecto',
        confirmButtonColor: '#28a745'
      });

      return tx.hash;
    } catch (error: any) {
      // Don't show alert if user cancelled
      if (error.message?.includes('cancelado por el usuario') || error.code === 'ACTION_REJECTED') {
        throw new Error('Swap cancelado');
      }

      // Show error alert
      await Swal.fire({
        icon: 'error',
        title: 'Error en el Swap',
        html: `
          <p>${error?.reason || error?.message || 'El swap falló'}</p>
          ${error.code ? `<p style="margin-top: 10px; font-size: 12px; color: #6c757d;">Código: ${error.code}</p>` : ''}
        `,
        confirmButtonText: 'Entendido'
      });

      throw error;
    }
  }

  /**
   * Get token balance via RPC call to BSC
   * Uses eth_call to query balanceOf directly on the blockchain
   */
  async getTokenBalanceViaRpc(tokenAddress: string, walletAddress: string, decimals: number = 18): Promise<{
    balanceWei: string;
    balanceFormatted: string;
    decimals: number;
    formattedWithDecimals: string;
    rawHex: string;
  }> {
    try {
      // Normalize addresses for checksum validation
      const normalizedToken = this.normalizeAddress(tokenAddress);
      const normalizedWallet = this.normalizeAddress(walletAddress);

      // Build the data parameter: 0x70a08231 + padded wallet address
      const methodId = '70a08231';
      const walletAddressHex = normalizedWallet.slice(2).toLowerCase(); // Remove 0x prefix
      const paddedAddress = walletAddressHex.padStart(64, '0');
      const data = `0x${methodId}${paddedAddress}`;

      console.log('%c📱 Detalles de Llamada RPC', 'color: #4CAF50; font-weight: bold');
      console.log(`Dirección del Token: ${normalizedToken}`);
      console.log(`Dirección de Billetera: ${walletAddress}`);
      console.log(`Decimales: ${decimals}`);
      console.log(`Data (llamada balanceOf): ${data}`);

      // Make RPC call to BSC
      const response = await fetch('https://bsc-dataseed.binance.org/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'eth_call',
          params: [
            {
              to: normalizedToken,
              data: data
            },
            'latest'
          ],
          id: 1
        })
      });

      const result = await response.json();

      // Parse the result
      if (result.error) {
        console.error('%c❌ Error RPC', 'color: #f44336', result.error);
        return {
          balanceWei: '0',
          balanceFormatted: '0',
          decimals: decimals,
          formattedWithDecimals: '0',
          rawHex: '0x'
        };
      }

      if (!result.result || result.result === '0x') {
        console.warn('%c⚠️ Respuesta vacía desde RPC', 'color: #ff9800');
        return {
          balanceWei: '0',
          balanceFormatted: '0',
          decimals: decimals,
          formattedWithDecimals: '0',
          rawHex: result.result || '0x'
        };
      }

      // Convert hex result to decimal
      const rawHex = result.result;
      const balanceWei = BigInt(rawHex);
      const divisor = BigInt(10 ** decimals);

      // Full formatted balance with decimals (all decimals)
      const fullBalance = balanceWei.toString();
      let formattedWithFullDecimals = '';

      if (fullBalance.length <= decimals) {
        formattedWithFullDecimals = '0.' + fullBalance.padStart(decimals, '0');
      } else {
        const integerPart = fullBalance.slice(0, fullBalance.length - decimals);
        const decimalPart = fullBalance.slice(fullBalance.length - decimals);
        formattedWithFullDecimals = integerPart + '.' + decimalPart;
      }

      // Simplified version without trailing zeros
      const balanceFormatted = (balanceWei / divisor).toString();

      console.log('%c✅ Resultado de Balance de Token', 'color: #4CAF50; font-weight: bold');
      console.log(`Hex sin procesar: ${rawHex}`);
      console.log(`Balance (Wei): ${balanceWei.toString()}`);
      console.log(`Balance (con ${decimals} decimales): ${formattedWithFullDecimals}`);
      console.log(`Balance (simplificado): ${balanceFormatted}`);

      return {
        balanceWei: balanceWei.toString(),
        balanceFormatted: balanceFormatted,
        decimals: decimals,
        formattedWithDecimals: formattedWithFullDecimals,
        rawHex: rawHex
      };
    } catch (error) {
      console.error('%c❌ Error al obtener balance de token vía RPC', 'color: #f44336', error);
      return {
        balanceWei: '0',
        balanceFormatted: '0',
        decimals: decimals,
        formattedWithDecimals: '0',
        rawHex: '0x'
      };
    }
  }

  private addLocalSwapTransaction(params: {
    hash: string;
    fromToken: SwapToken;
    toToken: SwapToken;
    amountIn: string;
    account: string;
  }) {
    const entry: BlockchainTransaction = {
      color: 'info',
      icon: 'bx-transfer-alt',
      name: `Swap ${params.fromToken.symbol} to ${params.toToken.symbol}`,
      date: this.formatDate(new Date()),
      text: 'Swap submitted',
      price: `${this.formatDisplayAmount(params.amountIn, 6)} ${params.fromToken.symbol}`,
      type: 'transfer',
      hash: params.hash,
      from: params.account,
      to: params.account
    };

    const current = this.transactionsSubject.getValue();
    this.transactionsSubject.next([entry, ...current]);
  }

  private async fetchBscPrices() {
    try {
      const [nativeRes, btcRes] = await Promise.all([
        fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${this.bscConfig.nativePriceSymbol}`),
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT')
      ]);

      const nativeJson = await nativeRes.json();
      const btcJson = await btcRes.json();

      const nativePrice = Number(nativeJson.price);
      const btcPrice = Number(btcJson.price);

      if (Number.isFinite(nativePrice)) {
        this.nativePrice = nativePrice;
      }

      if (Number.isFinite(btcPrice)) {
        this.btcPrice = btcPrice;
      }
    } catch (error) {
      console.warn('Fallo al obtener precios, usando valores anteriores', error);
    }
  }

  private async getNativeBalanceWei(address: string): Promise<bigint> {
    const balance = await this.metamaskProvider.request({
      method: 'eth_getBalance',
      params: [address, 'latest']
    });
    if (!balance || balance === '0x') {
      return 0n;
    }
    return BigInt(balance);
  }

  private async getErc20BalanceWei(address: string, tokenAddress: string): Promise<bigint> {
    const data = this.encodeBalanceOf(address);
    const result = await this.metamaskProvider.request({
      method: 'eth_call',
      params: [{ to: tokenAddress, data }, 'latest']
    });
    if (!result || result === '0x') {
      return 0n;
    }
    return BigInt(result);
  }

  private async enrichToken(token: SwapToken): Promise<SwapToken> {
    if (token.isNative) {
      return { ...token, decimals: 18 };
    }

    if (token.decimals !== null && token.decimals !== undefined) {
      return token;
    }

    const metadata = await this.getTokenMetadata(token.address);
    return { ...token, ...metadata };
  }

  private async readErc20String(address: string, method: 'symbol' | 'name'): Promise<string> {
    const selector = method === 'symbol' ? '0x95d89b41' : '0x06fdde03';
    const result = await this.metamaskProvider.request({
      method: 'eth_call',
      params: [{ to: address, data: selector }, 'latest']
    });

    if (!result || result === '0x') {
      return '';
    }

    if (result.length === 66) {
      return this.hexToAscii(result);
    }

    try {
      const decoded = ethers.AbiCoder.defaultAbiCoder().decode(['string'], result);
      return decoded?.[0] || '';
    } catch {
      return '';
    }
  }

  private async readErc20Decimals(address: string): Promise<number> {
    const selector = '0x313ce567';
    const result = await this.metamaskProvider.request({
      method: 'eth_call',
      params: [{ to: address, data: selector }, 'latest']
    });

    if (!result || result === '0x') {
      return 18;
    }

    return Number(BigInt(result));
  }

  private hexToAscii(hex: string): string {
    const clean = hex.replace(/^0x/, '');
    let str = '';
    for (let i = 0; i < clean.length; i += 2) {
      const code = parseInt(clean.slice(i, i + 2), 16);
      if (code === 0) {
        continue;
      }
      str += String.fromCharCode(code);
    }
    return str.trim();
  }

  private encodeBalanceOf(address: string): string {
    const methodId = '70a08231';
    const paddedAddress = address.replace(/^0x/, '').toLowerCase().padStart(64, '0');
    return `0x${methodId}${paddedAddress}`;
  }

  private formatUnits(value: bigint, decimals: number, precision: number): string {
    const base = 10n ** BigInt(decimals);
    const integerPart = value / base;
    const fractionPart = value % base;
    const fractionStr = fractionPart
      .toString()
      .padStart(decimals, '0')
      .slice(0, precision);
    return `${integerPart.toString()}.${fractionStr}`;
  }

  private formatDisplayAmount(value: string, precision: number): string {
    const num = Number(value);
    if (!Number.isFinite(num)) {
      return value;
    }
    return num.toFixed(precision);
  }

  /**
   * Format date to readable format
   */
  private formatDate(date: Date): string {
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  /**
   * Get filtered transactions
   */
  getFilteredTransactions(type: 'all' | 'buy' | 'sell'): Observable<BlockchainTransaction[]> {
    return new Observable(observer => {
      this.transactions$.subscribe(transactions => {
        if (type === 'all') {
          observer.next(transactions);
        } else {
          observer.next(transactions.filter(t => t.type === type));
        }
      });
    });
  }

  /**
   * Get all transactions as Observable
   */
  getTransactions(): Observable<BlockchainTransaction[]> {
    return this.transactions$;
  }

  /**
   * Get wallet balance as Observable
   */
  getWalletBalance(): Observable<WalletBalance | null> {
    return this.walletBalance$;
  }

  /**
   * Get token balances as Observable
   */
  getTokenBalances(): Observable<WalletTokenBalance[]> {
    return this.tokenBalances$;
  }

  /**
   * Refresh wallet balance for connected address
   */
  refreshWalletBalance() {
    if (this.connectedAddress) {
      this.fetchWalletBalance(this.connectedAddress);
    }
  }

  /**
   * Expose Metamask provider for external use
   */
  getMetamaskProvider() {
    return this.metamaskProvider;
  }

  /**
   * Test API connection - for debugging purposes
   * Call from browser console: blockchainService.testApiConnection('0xYourAddress')
   */
  async testApiConnection(testAddress?: string): Promise<void> {
    const address = testAddress || this.connectedAddress;
    if (!address) {
      console.warn('⚠️ No se encontró billetera conectada. Conecta MetaMask o pasa una dirección a testApiConnection().');
      return;
    }

    console.log('🧪 Probando conexión con API Etherscan V2...');
    console.log('📍 Clave API configurada:', this.bscscanApiKey ? 'SÍ ✅' : 'NO ❌');
    console.log('📍 Dirección Conectada:', this.connectedAddress || 'No conectada');
    console.log('📍 Dirección de Prueba:', address);

    const url = `${this.bscscanBaseUrl}?chainid=${this.bscChainIdDecimal}&module=account&action=txlistinternal&address=${address}`
      + '&startblock=0&endblock=99999999&sort=asc&page=1&offset=10'
      + `&apikey=${this.bscscanApiKey}`;

    console.log('🔗 URL Completa:', url);

    try {
      const response = await fetch(url);
      console.log('📡 Estado HTTP:', response.status, response.statusText);

      const data = await response.json();
      console.log('📦 Datos de Respuesta:', data);

      if (data?.status === '1' && Array.isArray(data.result)) {
        console.log('✅ ¡API funcionando! Se encontraron', data.result.length, 'transacciones');
      } else {
        console.log('⚠️ API retornó estado no exitoso');
        console.log('   Estado:', data?.status);
        console.log('   Mensaje:', data?.message);
        console.log('   Resultado:', data?.result);
      }
    } catch (error: any) {
      console.error('❌ Prueba de API Falló:', error);
    }
  }
}
