import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  private transactionsSubject = new BehaviorSubject<BlockchainTransaction[]>([]);
  public transactions$ = this.transactionsSubject.asObservable();

  private walletBalanceSubject = new BehaviorSubject<WalletBalance | null>(null);
  public walletBalance$ = this.walletBalanceSubject.asObservable();

  private metamaskProvider: any;
  private connectedAddress: string | null = null;
  private nativePrice = 0;
  private btcPrice = 0;
  private usdtPrice = 1;
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

  constructor() {
    this.initializeMetamask();
  }

  /**
   * Initialize Metamask provider
   */
  private initializeMetamask() {
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      this.metamaskProvider = (window as any).ethereum;
      console.log('Metamask provider initialized');
      this.setupMetamaskListeners();

      // Check if already connected
      this.checkConnectedAccount();
    } else {
      console.warn('Metamask provider not found');
    }
  }

  /**
   * Check if wallet is already connected
   */
  private checkConnectedAccount() {
    if (!this.metamaskProvider) return;

    this.metamaskProvider.request({
      method: 'eth_accounts'
    }).then((accounts: string[]) => {
      if (accounts && accounts.length > 0) {
        this.connectedAddress = accounts[0];
        console.log('Wallet already connected:', this.connectedAddress);
        this.fetchWalletBalance(this.connectedAddress);
        this.fetchTransactions(this.connectedAddress);
      }
    }).catch((error: any) => {
      console.warn('Could not check connected account:', error);
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
      } else {
        this.connectedAddress = null;
        this.transactionsSubject.next([]);
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
  }

  /**
   * Fetch wallet balance for a given address
   */
  private fetchWalletBalance(address: string) {
    if (!this.metamaskProvider) {
      console.warn('Metamask provider not available');
      this.walletBalanceSubject.next(null);
      return;
    }

    // Validate address format
    if (!address || address.length !== 42) {
      console.warn('Invalid Ethereum address:', address);
      this.walletBalanceSubject.next(null);
      return;
    }

    // Call eth_getBalance to get ETH balance
    this.loadBscWalletBalance(address).catch((error: any) => {
      console.error('Error fetching wallet balance from Metamask:', error);
      this.walletBalanceSubject.next(null);
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
      console.warn('Invalid balance values from Metamask');
      this.walletBalanceSubject.next(null);
      return;
    }

    const nativeBalanceUSD = nativeBalanceNumber * this.nativePrice;
    const btcBalanceUSD = btcBalanceNumber * this.btcPrice;
    const usdtBalanceUSD = usdtBalanceNumber * this.usdtPrice;
    const totalBalanceUSD = nativeBalanceUSD + btcBalanceUSD + usdtBalanceUSD;

    const walletBalance: WalletBalance = {
      nativeSymbol: this.bscConfig.nativeSymbol,
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

    console.log('Wallet balance fetched successfully:', walletBalance);
    this.walletBalanceSubject.next(walletBalance);
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
      console.warn('Price fetch failed, using previous values', error);
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

  /**
   * Fetch transactions for a given address
   * Currently returns mock data, but can be replaced with Etherscan or other blockchain API
   */
  private fetchTransactions(address: string) {
    // Mock transactions - In production, replace with real API call to Etherscan, Alchemy, or similar
    const mockTransactions = this.generateMockTransactions(address);
    this.transactionsSubject.next(mockTransactions);
  }

  /**
   * Generate mock transactions (can be replaced with real API call)
   */
  private generateMockTransactions(address: string): BlockchainTransaction[] {
    const now = new Date();

    // Generate mock data with realistic structure
    const transactions: BlockchainTransaction[] = [
      {
        color: 'success',
        icon: 'bx-cart',
        name: 'Ethereum Purchase',
        date: this.formatDate(new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000)),
        text: 'Received',
        price: '+ $2,456.70',
        type: 'buy',
        hash: '0x' + Math.random().toString(16).slice(2),
        from: '0x742d35Cc6634C0532925a3b844Bc9e7595f' + Math.random().toString(16).slice(2),
        to: address
      },
      {
        color: 'danger',
        icon: 'bx-send',
        name: 'Bitcoin Transfer',
        date: this.formatDate(new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000)),
        text: 'Sent',
        price: '- $1,230.00',
        type: 'sell',
        hash: '0x' + Math.random().toString(16).slice(2),
        from: address,
        to: '0x742d35Cc6634C0532925a3b844Bc9e7595f' + Math.random().toString(16).slice(2)
      },
      {
        color: 'success',
        icon: 'bx-cart',
        name: 'Litecoin Purchase',
        date: this.formatDate(new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000)),
        text: 'Received',
        price: '+ $842.30',
        type: 'buy',
        hash: '0x' + Math.random().toString(16).slice(2),
        from: '0x742d35Cc6634C0532925a3b844Bc9e7595f' + Math.random().toString(16).slice(2),
        to: address
      },
      {
        color: 'warning',
        icon: 'bx-transfer-alt',
        name: 'Token Transfer',
        date: this.formatDate(new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000)),
        text: 'Transferred',
        price: '- $567.89',
        type: 'transfer',
        hash: '0x' + Math.random().toString(16).slice(2),
        from: address,
        to: '0x742d35Cc6634C0532925a3b844Bc9e7595f' + Math.random().toString(16).slice(2)
      },
      {
        color: 'danger',
        icon: 'bx-send',
        name: 'Ethereum Transfer',
        date: this.formatDate(new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)),
        text: 'Sent',
        price: '- $3,145.00',
        type: 'sell',
        hash: '0x' + Math.random().toString(16).slice(2),
        from: address,
        to: '0x742d35Cc6634C0532925a3b844Bc9e7595f' + Math.random().toString(16).slice(2)
      },
      {
        color: 'success',
        icon: 'bx-cart',
        name: 'Bitcoin Purchase',
        date: this.formatDate(new Date(now.getTime() - 9 * 24 * 60 * 60 * 1000)),
        text: 'Received',
        price: '+ $5,234.00',
        type: 'buy',
        hash: '0x' + Math.random().toString(16).slice(2),
        from: '0x742d35Cc6634C0532925a3b844Bc9e7595f' + Math.random().toString(16).slice(2),
        to: address
      }
    ];

    return transactions;
  }

  /**
   * Format date to readable format
   */
  private formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
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
}
