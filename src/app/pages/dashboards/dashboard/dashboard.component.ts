import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import Swal from 'sweetalert2';

import { walletRadialChart, overviewChart, transactionsData, bitconinChart, ethereumChart, litecoinChart } from './dashboard.data';

import { ChartType, Transactions } from './dashboard.model';
import { ChartComponent, NgApexchartsModule } from "ng-apexcharts";
import { ConfigService } from '../../../core/services/config.service';
import { AuthService } from 'src/app/core/auth/services/auth.service';
import { BlockchainService, BlockchainTransaction, SwapToken, WalletBalance, WalletTokenBalance } from '../../../core/services/blockchain.service';
import { WalletService } from '../../../core/services/wallet.service';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { SimplebarAngularModule } from 'simplebar-angular';
import { LoaderComponent } from 'src/app/shared/ui/loader/loader.component';
import { PagetitleComponent } from 'src/app/shared/ui/pagetitle/pagetitle.component';
import { FilterByTypePipe } from 'src/app/shared/pipes/filter-by-type.pipe';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [PagetitleComponent, LoaderComponent, BsDropdownModule, NgApexchartsModule, TabsModule, ModalModule, SimplebarAngularModule, FilterByTypePipe, FormsModule, TranslateModule, CommonModule]
})
export class DashboardComponent implements OnInit, OnDestroy {

  @ViewChild("chart", { static: false }) chart: ChartComponent;
  @ViewChild("addTokenModal", { static: false }) addTokenModal: any;

  // bread crumb items
  breadCrumbItems: Array<{}>;
  public activeOptionButton = "all";

  walletRadialChart: ChartType;
  overviewChart: ChartType;
  bitconinChart: ChartType;
  ethereumChart: ChartType;
  litecoinChart: ChartType;

  walletBalanceData: any;
  userDisplayName = '';
  userEmail = '';
  realWalletBalance: WalletBalance | null = null;
  walletTokenBalances: WalletTokenBalance[] = [];

  swapTokens: SwapToken[] = [];
  swapFromTokens: SwapToken[] = [];
  swapFromToken: SwapToken | null = null;
  swapToToken: SwapToken | null = null;
  swapAmount = '';
  swapToAmount = '';
  swapQuote = '';
  swapMinReceive = '';
  swapMaxPay = '';
  swapQuoteSymbol = '';
  swapQuoteLoading = false;
  swapError = '';
  swapSuccess = '';
  swapIsLoading = false;
  readonly slippageBps = 500;
  readonly deadlineMinutes = 20;
  private tokenLookupInFlight = new Set<string>();
  private symbolLookupInFlight = new Set<string>();
  private quoteTimer: ReturnType<typeof setTimeout> | null = null;
  lastSwapInput: 'from' | 'to' = 'from';

  // RPC Balance cache y polling
  private rpcBalanceCache = new Map<string, any>();
  private rpcPollingIntervals = new Map<string, NodeJS.Timeout>();
  private readonly RPC_POLL_INTERVAL = 10000; // 10 segundos

  // Separated token lists
  pancakeSwapTokens: SwapToken[] = [];
  customTokens: SwapToken[] = [];
  filteredPancakeSwapTokens: SwapToken[] = [];
  filteredCustomTokens: SwapToken[] = [];

  // Dropdown state
  fromTokenSearch = '';
  toTokenSearch = '';
  filteredFromTokens: SwapToken[] = [];
  filteredToTokens: SwapToken[] = [];
  popularTokens: SwapToken[] = [];

  // Add custom token
  customTokenAddress = '';
  isAddingCustomTokenFrom = false;
  isAddingCustomTokenTo = false;
  customTokenLoading = false;
  customTokenError = '';

  // Add token modal
  addTokenModalRef?: BsModalRef;
  tokenSearchInput = '';
  tokenSearchResults: SwapToken[] = [];
  isSearchingToken = false;


  transactionsData: BlockchainTransaction[] = [];
  private destroy$ = new Subject<void>();

  constructor(
    private configService: ConfigService,
    private authService: AuthService,
    private blockchainService: BlockchainService,
    private walletService: WalletService
  ) {
    // Expose service for debugging in browser console
    if (typeof window !== 'undefined') {
      (window as any).blockchainService = this.blockchainService;
      console.log('💡 Consejo: Usa window.blockchainService.testApiConnection() en la consola para probar la API');
    }
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'PAGETITLE.DASHBOARD', active: true }];

    this.configService.getConfig().subscribe(response => {
      this.walletBalanceData = response.cryptoWalletBalance;
    });

    // Load user info from JWT token
    const token = this.authService.getAccessToken();
    if (token) {
      const tokenPayload = this.decodeJwtPayload(token);
      const firstName = tokenPayload?.firstName?.trim() || '';
      const lastName = tokenPayload?.lastName?.trim() || '';
      this.userDisplayName = `${firstName} ${lastName}`.trim();
      this.userEmail = tokenPayload?.sub || '';
    }

    // Subscribe to blockchain transactions
    this.blockchainService.getTransactions()
      .pipe(takeUntil(this.destroy$))
      .subscribe(transactions => {
        console.log('📊 Dashboard recibió transacciones:', transactions.length);
        this.transactionsData = transactions;
      });

    // Subscribe to wallet balance
    this.blockchainService.getWalletBalance()
      .pipe(takeUntil(this.destroy$))
      .subscribe(balance => {
        this.realWalletBalance = balance;
        this.updateSwapFromTokens();
      });

    // Subscribe to token balances
    this.blockchainService.getTokenBalances()
      .pipe(takeUntil(this.destroy$))
      .subscribe(balances => {
        this.walletTokenBalances = balances;
        this.updateSwapFromTokens();
      });

    // Ensure balance refresh when returning to the dashboard
    this.blockchainService.refreshWalletBalance();

    this.loadSwapTokens();

    this._fetchData();
  }

  async loadSwapTokens() {
    try {
      this.swapTokens = await this.blockchainService.getSwapTokens();

      // Load custom tokens from localStorage
      const savedCustomTokens = this.loadCustomTokensFromStorage();

      // Add saved custom tokens that don't already exist
      for (const customToken of savedCustomTokens) {
        const exists = this.swapTokens.some(t => t.address.toLowerCase() === customToken.address.toLowerCase());
        if (!exists) {
          this.swapTokens.push(customToken);
        }
      }

      // Separate tokens into pancakeswap and custom
      this.pancakeSwapTokens = this.swapTokens.filter(t => !t.isCustom);
      this.customTokens = this.swapTokens.filter(t => t.isCustom);

      this.updateSwapFromTokens();
      this.loadPopularTokens();
      if (!this.swapFromToken) {
        this.swapFromToken = this.swapFromTokens[0] || null;
      }
      this.swapToToken = this.swapTokens[1] || null;

      // Initialize filtered lists
      this.filteredFromTokens = this.swapFromTokens;
      this.filteredToTokens = this.swapTokens;
      this.filteredPancakeSwapTokens = this.pancakeSwapTokens;
      this.filteredCustomTokens = this.customTokens;

      this.updateSwapQuote();
    } catch (error: any) {
      this.swapError = error?.message || 'Failed to load swap tokens.';
    }
  }

  private loadPopularTokens() {
    const popularSymbols = ['BNB', 'USDT', 'BUSD', 'CAKE', 'ETH', 'WBNB'];
    this.popularTokens = this.swapTokens.filter(token =>
      popularSymbols.includes(token.symbol.toUpperCase())
    );
  }

  /**
   * Save custom tokens to localStorage with expiration date (30 days)
   */
  private saveCustomTokensToStorage() {
    try {
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 30); // 30 días

      const tokensToSave = this.customTokens.map(token => ({
        token,
        expiresAt: expirationDate.toISOString()
      }));

      localStorage.setItem('customSwapTokens', JSON.stringify(tokensToSave));
      console.log(`💾 Guardados ${tokensToSave.length} tokens personalizados en localStorage`);
    } catch (error) {
      console.error('❌ Error al guardar tokens en localStorage:', error);
    }
  }

  /**
   * Load custom tokens from localStorage and remove expired ones
   */
  private loadCustomTokensFromStorage(): SwapToken[] {
    try {
      const savedData = localStorage.getItem('customSwapTokens');
      if (!savedData) {
        return [];
      }

      const tokensData = JSON.parse(savedData);
      const now = new Date();
      const validTokens: SwapToken[] = [];
      const expiredTokens: any[] = [];

      for (const item of tokensData) {
        const expiresAt = new Date(item.expiresAt);

        if (expiresAt > now) {
          // Token is still valid
          validTokens.push(item.token);
        } else {
          // Token has expired
          expiredTokens.push(item.token);
        }
      }

      if (expiredTokens.length > 0) {
        console.log(`🗑️ Eliminados ${expiredTokens.length} tokens expirados:`, expiredTokens.map(t => t.symbol));
        // Save only valid tokens back to storage
        const validTokensData = validTokens.map(token => ({
          token,
          expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
        }));
        localStorage.setItem('customSwapTokens', JSON.stringify(validTokensData));
      }

      console.log(`✅ Cargados ${validTokens.length} tokens personalizados desde localStorage`);
      return validTokens;
    } catch (error) {
      console.error('❌ Error al cargar tokens desde localStorage:', error);
      return [];
    }
  }

  filterFromTokens() {
    const search = this.fromTokenSearch.toLowerCase().trim();
    if (!search) {
      this.filteredPancakeSwapTokens = this.pancakeSwapTokens;
      this.filteredCustomTokens = this.customTokens;
      return;
    }
    if (this.isAddressInput(search)) {
      this.ensureTokenByAddress(search);
      this.filteredPancakeSwapTokens = this.pancakeSwapTokens.filter(token => token.address.toLowerCase() === search);
      this.filteredCustomTokens = this.customTokens.filter(token => token.address.toLowerCase() === search);
      return;
    }
    this.filteredPancakeSwapTokens = this.pancakeSwapTokens.filter(token =>
      token.symbol.toLowerCase().includes(search) ||
      token.name.toLowerCase().includes(search)
    );
    this.filteredCustomTokens = this.customTokens.filter(token =>
      token.symbol.toLowerCase().includes(search) ||
      token.name.toLowerCase().includes(search)
    );
    if (this.filteredPancakeSwapTokens.length === 0 && this.filteredCustomTokens.length === 0) {
      this.ensureTokenBySymbol(search);
    }
  }

  filterToTokens() {
    const search = this.toTokenSearch.toLowerCase().trim();
    if (!search) {
      this.filteredPancakeSwapTokens = this.pancakeSwapTokens;
      this.filteredCustomTokens = this.customTokens;
      return;
    }
    if (this.isAddressInput(search)) {
      this.ensureTokenByAddress(search);
      this.filteredPancakeSwapTokens = this.pancakeSwapTokens.filter(token => token.address.toLowerCase() === search);
      this.filteredCustomTokens = this.customTokens.filter(token => token.address.toLowerCase() === search);
      return;
    }
    this.filteredPancakeSwapTokens = this.pancakeSwapTokens.filter(token =>
      token.symbol.toLowerCase().includes(search) ||
      token.name.toLowerCase().includes(search)
    );
    this.filteredCustomTokens = this.customTokens.filter(token =>
      token.symbol.toLowerCase().includes(search) ||
      token.name.toLowerCase().includes(search)
    );
    if (this.filteredPancakeSwapTokens.length === 0 && this.filteredCustomTokens.length === 0) {
      this.ensureTokenBySymbol(search);
    }
  }

  selectFromToken(token: SwapToken) {
    this.swapFromToken = token;
    this.fromTokenSearch = '';
    this.filteredFromTokens = this.swapTokens;
    this.startTokenBalancePolling(token);
    this.queueSwapQuote();
  }

  selectToToken(token: SwapToken) {
    this.swapToToken = token;
    this.toTokenSearch = '';
    this.filteredToTokens = this.swapTokens;
    this.startTokenBalancePolling(token);
    this.queueSwapQuote();
  }

  private startTokenBalancePolling(token: SwapToken) {
    const tokenKey = token.address.toLowerCase();

    // Stop any existing polling for this token
    if (this.rpcPollingIntervals.has(tokenKey)) {
      clearInterval(this.rpcPollingIntervals.get(tokenKey)!);
      this.rpcPollingIntervals.delete(tokenKey);
    }

    // Fetch balance immediately
    this.fetchTokenBalanceViaRpc(token);

    // Start polling every 10 seconds
    const interval = setInterval(() => {
      this.fetchTokenBalanceViaRpc(token);
    }, this.RPC_POLL_INTERVAL);

    this.rpcPollingIntervals.set(tokenKey, interval);
    console.log(`⏱️ Iniciado sondeo de saldo para ${token.symbol} cada ${this.RPC_POLL_INTERVAL / 1000}s`);
  }

  private stopTokenBalancePolling(token: SwapToken) {
    const tokenKey = token.address.toLowerCase();
    if (this.rpcPollingIntervals.has(tokenKey)) {
      clearInterval(this.rpcPollingIntervals.get(tokenKey)!);
      this.rpcPollingIntervals.delete(tokenKey);
      console.log(`⏹️ Detenido sondeo de saldo para ${token.symbol}`);
    }
  }

  private fetchTokenBalanceViaRpc(token: SwapToken) {
    const wallet = this.walletService.getWallet();
    if (!wallet || !wallet.address) {
      console.log('No hay billetera conectada, omitiendo consulta de saldo RPC');
      return;
    }

    // Use token decimals if available, otherwise default to 18
    const decimals = token.decimals || 18;

    this.blockchainService.getTokenBalanceViaRpc(token.address, wallet.address, decimals)
      .then(balanceInfo => {
        // Cache the balance info by token address
        this.rpcBalanceCache.set(token.address.toLowerCase(), balanceInfo);

        console.group(`💰 Información de Saldo ${token.symbol}`);
        console.log(`Token: ${token.name} (${token.symbol})`);
        console.log(`Dirección del Token: ${token.address}`);
        console.log(`Billetera: ${wallet.address}`);
        console.log(`Decimales: ${balanceInfo.decimals}`);
        console.log(`Hex sin procesar: ${balanceInfo.rawHex}`);
        console.log(`Saldo (Wei): ${balanceInfo.balanceWei}`);
        console.log(`Saldo (con decimales): ${balanceInfo.formattedWithDecimals}`);
        console.log(`Saldo (simplificado): ${balanceInfo.balanceFormatted}`);
        console.groupEnd();
      })
      .catch(error => {
        console.error(`Error al obtener saldo para ${token.symbol}:`, error);
      });
  }

  onSwapAmountChange(value: string) {
    this.swapAmount = value;
    this.lastSwapInput = 'from';
    this.queueSwapQuote();
  }

  onSwapToAmountChange(value: string) {
    this.swapToAmount = value;
    this.lastSwapInput = 'to';
    this.queueSwapQuote();
  }

  toggleWallet(): void {
    if (this.realWalletBalance) {
      // Stop all polling when disconnecting
      this.rpcPollingIntervals.forEach((interval) => {
        clearInterval(interval);
      });
      this.rpcPollingIntervals.clear();
      this.rpcBalanceCache.clear();

      this.walletService.disconnectWallet();
      this.realWalletBalance = null;
      this.walletTokenBalances = [];
    } else {
      this.walletService.connectWallet().then(wallet => {
        if (wallet) {
          this.blockchainService.refreshWalletBalance();
        }
      });
    }
  }

  async addCustomToken(tokenAddress: string, dropdown: 'from' | 'to'): Promise<void> {
    // Validate address format
    if (!tokenAddress || !tokenAddress.match(/^0x[a-fA-F0-9]{40}$/)) {
      this.customTokenError = 'Invalid token address. Must be a valid Ethereum address (0x...)';
      return;
    }

    this.customTokenLoading = true;
    this.customTokenError = '';

    try {
      // Get token metadata from blockchain
      const tokenMetadata = await this.blockchainService.getTokenMetadata(tokenAddress);

      // Check if token already exists
      const exists = this.swapTokens.some(t => t.address.toLowerCase() === tokenAddress.toLowerCase());
      if (exists) {
        this.customTokenError = 'Token already exists in the list';
        this.customTokenLoading = false;
        return;
      }

      // Create new custom token
      const customToken: SwapToken = {
        address: tokenMetadata.address,
        symbol: tokenMetadata.symbol,
        name: tokenMetadata.name,
        decimals: tokenMetadata.decimals,
        isCustom: true
      };

      // Add to lists
      this.swapTokens.push(customToken);
      this.customTokens.push(customToken);
      this.pancakeSwapTokens = this.swapTokens.filter(t => !t.isCustom);

      // Update filtered lists
      this.filteredCustomTokens.push(customToken);
      this.filteredPancakeSwapTokens = this.pancakeSwapTokens;

      console.log(`✅ Token personalizado agregado: ${customToken.symbol}`);

      // Save to localStorage
      this.saveCustomTokensToStorage();

      // Select the token
      if (dropdown === 'from') {
        this.selectFromToken(customToken);
        this.customTokenAddress = '';
        this.isAddingCustomTokenFrom = false;
      } else {
        this.selectToToken(customToken);
        this.customTokenAddress = '';
        this.isAddingCustomTokenTo = false;
      }
    } catch (error: any) {
      this.customTokenError = error?.message || 'Fallo al agregar token. Asegúrate de que la dirección sea válida.';
      console.error('Error al agregar token personalizado:', error);
    } finally {
      this.customTokenLoading = false;
    }
  }

  isValidAddress(address: string): boolean {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
  }

  showAddTokenModal() {
    // Reset form
    this.tokenSearchInput = '';
    this.tokenSearchResults = [];
    this.isSearchingToken = false;
    this.customTokenError = '';
    this.customTokenLoading = false;

    // Open modal
    this.addTokenModal?.show();
  }

  onTokenSearchChange() {
    const searchValue = this.tokenSearchInput.trim();

    if (!searchValue) {
      this.tokenSearchResults = [];
      this.customTokenError = '';
      return;
    }

    this.isSearchingToken = true;
    this.customTokenError = '';

    // Simple debounce with setTimeout
    setTimeout(() => {
      try {
        // Check if it's an address or symbol
        if (this.isValidAddress(searchValue)) {
          // It's an address - don't show suggestions
          this.tokenSearchResults = [];
        } else {
          // It's a symbol - search in token list
          const symbol = searchValue.toUpperCase();
          const matchedTokens = this.swapTokens.filter(t =>
            t.symbol.toUpperCase().includes(symbol) ||
            t.name.toUpperCase().includes(symbol)
          );

          this.tokenSearchResults = matchedTokens.slice(0, 5);
        }
      } catch (error) {
        this.customTokenError = 'Error al buscar token';
        this.tokenSearchResults = [];
      } finally {
        this.isSearchingToken = false;
      }
    }, 300);
  }

  async addTokenFromModal() {
    const searchValue = this.tokenSearchInput.trim();

    if (!searchValue) {
      this.customTokenError = 'Por favor ingresa una dirección o símbolo';
      return;
    }

    this.customTokenLoading = true;
    this.customTokenError = '';

    try {
      // Check if it's a valid address
      if (this.isValidAddress(searchValue)) {
        // Check if token already exists
        const existingToken = this.swapTokens.find(t => t.address.toLowerCase() === searchValue.toLowerCase());
        if (existingToken) {
          this.customTokenError = `El token ${existingToken.symbol} ya está en la lista`;
          this.customTokenLoading = false;
          return;
        }

        // Fetch token metadata
        const tokenMetadata = await this.blockchainService.getTokenMetadata(searchValue);

        // Add to lists
        const customToken: SwapToken = {
          address: tokenMetadata.address,
          symbol: tokenMetadata.symbol,
          name: tokenMetadata.name,
          decimals: tokenMetadata.decimals,
          isCustom: true
        };

        this.swapTokens.push(customToken);
        this.customTokens.push(customToken);
        this.pancakeSwapTokens = this.swapTokens.filter(t => !t.isCustom);
        this.filteredCustomTokens.push(customToken);
        this.filteredPancakeSwapTokens = this.pancakeSwapTokens;

        // Save to localStorage
        this.saveCustomTokensToStorage();

        // Close modal
        this.addTokenModal?.hide();

        // Show success message
        await Swal.fire({
          icon: 'success',
          title: 'Token Agregado',
          html: `
            <p><strong>${customToken.symbol}</strong> se agregó correctamente a tu lista de tokens.</p>
            <p style="font-size: 12px; color: #6c757d; margin-top: 10px;">${customToken.name}</p>
          `,
          confirmButtonText: 'Perfecto',
          confirmButtonColor: '#28a745'
        });
      } else {
        // It's a symbol - find the token
        const symbol = searchValue.toUpperCase();
        const token = this.swapTokens.find(t => t.symbol.toUpperCase() === symbol);

        if (!token) {
          this.customTokenError = 'Token no encontrado. Intenta con la dirección del contrato.';
          this.customTokenLoading = false;
          return;
        }

        // Close modal (token already exists in list)
        this.addTokenModal?.hide();

        await Swal.fire({
          icon: 'info',
          title: 'Token Existente',
          html: `
            <p><strong>${token.symbol}</strong> ya está en la lista de tokens.</p>
          `,
          confirmButtonText: 'Entendido',
          confirmButtonColor: '#556ee6'
        });
      }
    } catch (error: any) {
      this.customTokenError = error?.message || 'Error al agregar token';
    } finally {
      this.customTokenLoading = false;
    }
  }

  async removeCustomToken(token: SwapToken, event: Event) {
    // Prevent dropdown from closing and token selection
    event.stopPropagation();
    event.preventDefault();

    const result = await Swal.fire({
      icon: 'warning',
      title: '¿Eliminar Token?',
      html: `
        <p>¿Estás seguro de que deseas eliminar <strong>${token.symbol}</strong> de tu lista?</p>
        <p style="font-size: 12px; color: #6c757d; margin-top: 10px;">${token.name}</p>
        <p style="font-size: 11px; color: #adb5bd; margin-top: 5px;">${token.address}</p>
      `,
      showCancelButton: true,
      confirmButtonText: 'Sí, Eliminar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d'
    });

    if (result.isConfirmed) {
      // Remove from all lists
      const tokenAddress = token.address.toLowerCase();

      this.swapTokens = this.swapTokens.filter(t => t.address.toLowerCase() !== tokenAddress);
      this.customTokens = this.customTokens.filter(t => t.address.toLowerCase() !== tokenAddress);
      this.filteredCustomTokens = this.filteredCustomTokens.filter(t => t.address.toLowerCase() !== tokenAddress);

      // Update pancakeSwapTokens list
      this.pancakeSwapTokens = this.swapTokens.filter(t => !t.isCustom);
      this.filteredPancakeSwapTokens = this.pancakeSwapTokens;

      // Clear selected tokens if they match the deleted token
      if (this.swapFromToken?.address.toLowerCase() === tokenAddress) {
        this.swapFromToken = null;
        this.swapAmount = '';
      }
      if (this.swapToToken?.address.toLowerCase() === tokenAddress) {
        this.swapToToken = null;
        this.swapToAmount = '';
      }

      // Clear swap quote if any
      this.swapQuote = '';
      this.swapMinReceive = '';
      this.swapMaxPay = '';

      // Save to localStorage
      this.saveCustomTokensToStorage();

      await Swal.fire({
        icon: 'success',
        title: 'Token Eliminado',
        text: `${token.symbol} se eliminó correctamente de tu lista`,
        timer: 2000,
        showConfirmButton: false
      });
    }
  }

  private queueSwapQuote() {
    if (this.quoteTimer) {
      clearTimeout(this.quoteTimer);
    }
    this.quoteTimer = setTimeout(() => {
      this.updateSwapQuote();
    }, 350);
  }

  async updateSwapQuote() {
    this.swapQuote = '';
    this.swapMinReceive = '';
    this.swapQuoteSymbol = '';
    this.swapMaxPay = '';
    this.swapError = '';

    // Clear only the RESULT field, not the input field
    if (this.lastSwapInput === 'from') {
      this.swapToAmount = '';
    } else {
      this.swapAmount = '';
    }

    this.swapQuoteLoading = false;
    if (!this.swapFromToken || !this.swapToToken) {
      return;
    }

    if (this.lastSwapInput === 'from') {
      if (!this.swapAmount || Number(this.swapAmount) <= 0) {
        return;
      }
    } else {
      if (!this.swapToAmount || Number(this.swapToAmount) <= 0) {
        return;
      }
    }

    if (this.swapFromToken.address.toLowerCase() === this.swapToToken.address.toLowerCase()) {
      return;
    }

    try {
      this.swapQuoteLoading = true;
      if (this.lastSwapInput === 'from') {
        // Ensure amountIn is a valid string
        const amountInStr = String(this.swapAmount || '').trim();
        if (!amountInStr || isNaN(Number(amountInStr))) {
          throw new Error('Invalid amount to swap');
        }

        const quote = await this.blockchainService.getSwapQuote({
          fromToken: this.swapFromToken,
          toToken: this.swapToToken,
          amountIn: amountInStr,
          slippageBps: this.slippageBps
        });
        this.swapQuote = quote.amountOut;
        this.swapMinReceive = quote.amountOutMin;
        this.swapQuoteSymbol = quote.symbol;
        this.swapToAmount = quote.amountOut;
        this.swapMaxPay = '';
      } else {
        // Ensure amountOut is a valid string
        const amountOutStr = String(this.swapToAmount || '').trim();
        if (!amountOutStr || isNaN(Number(amountOutStr))) {
          throw new Error('Invalid amount to receive');
        }

        const quote = await this.blockchainService.getSwapQuoteByAmountOut({
          fromToken: this.swapFromToken,
          toToken: this.swapToToken,
          amountOut: amountOutStr,
          slippageBps: this.slippageBps
        });
        this.swapQuote = this.swapToAmount;
        this.swapMinReceive = this.swapToAmount;
        this.swapQuoteSymbol = this.swapToToken.symbol;
        this.swapAmount = quote.amountIn;
        this.swapMaxPay = quote.amountInMax;
      }
    } catch (error: any) {
      // Keep user input intact - only clear calculated results
      this.swapQuote = '';
      this.swapMinReceive = '';
      this.swapQuoteSymbol = '';
      this.swapMaxPay = '';
      // Don't clear the input fields - preserve what user typed
      this.swapError = error?.message || 'Unable to calculate swap. Check network and token selection.';
      console.error('Swap quote error:', error);
    } finally {
      this.swapQuoteLoading = false;
    }
  }

  async submitSwap() {
    this.swapError = '';
    this.swapSuccess = '';
    if (!this.swapFromToken || !this.swapToToken) {
      this.swapError = 'Select tokens to swap.';
      return;
    }
    if (!this.swapAmount || Number(this.swapAmount) <= 0) {
      this.swapError = 'Enter a valid amount.';
      return;
    }
    if (this.swapFromToken.address.toLowerCase() === this.swapToToken.address.toLowerCase()) {
      this.swapError = 'Tokens must be different.';
      return;
    }

    try {
      this.swapIsLoading = true;
      const hash = await this.blockchainService.swapTokens({
        fromToken: this.swapFromToken,
        toToken: this.swapToToken,
        amountIn: this.swapAmount,
        slippageBps: this.slippageBps,
        deadlineMinutes: this.deadlineMinutes
      });
      // Success is now handled by SweetAlert2 in blockchain service
      this.swapSuccess = '';
    } catch (error: any) {
      // Errors are now handled by SweetAlert2 in blockchain service
      // Only log to console for debugging
      console.log('Swap error:', error?.message);
    } finally {
      this.swapIsLoading = false;
    }
  }

  private updateSwapFromTokens() {
    const balances = this.walletTokenBalances || [];
    const tokenMap = new Map<string, SwapToken>();

    this.swapTokens.forEach(token => {
      tokenMap.set(token.address.toLowerCase(), token);
    });

    const walletTokens = balances.map(balance => {
      const key = balance.address.toLowerCase();
      const known = tokenMap.get(key);
      return known || {
        address: balance.address,
        symbol: balance.symbol,
        name: balance.name,
        decimals: balance.decimals
      } as SwapToken;
    });

    const nativeToken = this.swapTokens.find(token => token.isNative);
    const nativeBalance = Number(this.realWalletBalance?.nativeBalance || 0);
    const includeNative = nativeToken && Number.isFinite(nativeBalance) && nativeBalance > 0;

    const next = [
      ...(includeNative && nativeToken ? [nativeToken] : []),
      ...walletTokens
    ];

    const unique = new Map<string, SwapToken>();
    next.forEach(token => {
      if (!token?.address) return;
      const key = token.address.toLowerCase();
      if (!unique.has(key)) {
        unique.set(key, token);
      }
    });

    this.swapFromTokens = Array.from(unique.values());
    if (this.swapFromTokens.length === 0) {
      this.swapFromTokens = this.swapTokens.filter(token => token.isNative);
    }

    const current = this.swapFromToken?.address?.toLowerCase();
    if (current && !this.swapFromTokens.some(token => token.address.toLowerCase() === current)) {
      this.swapFromToken = this.swapFromTokens[0] || null;
      this.updateSwapQuote();
    }

    this.filteredFromTokens = this.swapFromTokens;
  }

  private isAddressInput(value: string): boolean {
    return /^0x[a-fA-F0-9]{40}$/.test(value);
  }

  private async ensureTokenByAddress(address: string) {
    const key = address.toLowerCase();
    if (this.tokenLookupInFlight.has(key)) {
      return;
    }
    if (this.swapTokens.some(token => token.address.toLowerCase() === key)) {
      return;
    }

    this.tokenLookupInFlight.add(key);
    try {
      const token = await this.blockchainService.getTokenMetadata(address);
      if (!this.swapTokens.some(item => item.address.toLowerCase() === token.address.toLowerCase())) {
        this.swapTokens = [...this.swapTokens, token];
        this.updateSwapFromTokens();
        this.filteredToTokens = this.swapTokens;
      }
    } catch (error: any) {
      this.swapError = error?.message || 'Failed to load token.';
    } finally {
      this.tokenLookupInFlight.delete(key);
    }
  }

  private async ensureTokenBySymbol(symbol: string) {
    if (symbol.length < 2 || !/^[a-z0-9]+$/i.test(symbol)) {
      return;
    }

    const key = symbol.toUpperCase();
    if (this.symbolLookupInFlight.has(key)) {
      return;
    }

    if (this.swapTokens.some(token => token.symbol.toUpperCase() === key)) {
      return;
    }

    this.symbolLookupInFlight.add(key);
    try {
      const token = await this.blockchainService.getTokenBySymbol(key);
      if (!token) {
        return;
      }
      if (!this.swapTokens.some(item => item.address.toLowerCase() === token.address.toLowerCase())) {
        this.swapTokens = [...this.swapTokens, token];
        this.updateSwapFromTokens();
        this.filteredToTokens = this.swapTokens;
      }
    } catch (error: any) {
      this.swapError = error?.message || 'Failed to load token.';
    } finally {
      this.symbolLookupInFlight.delete(key);
    }
  }

  formatAddress(address?: string): string {
    if (!address) {
      return '—';
    }
    if (address.length <= 12) {
      return address;
    }
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }

  async copyAddress(address?: string, event?: MouseEvent) {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    if (!address) {
      return;
    }

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(address);
        return;
      }
    } catch {
      // fall back below
    }

    const textarea = document.createElement('textarea');
    textarea.value = address;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }

  isTokenInWallet(tokenAddress: string): boolean {
    return this.swapFromTokens.some(t => t.address.toLowerCase() === tokenAddress.toLowerCase());
  }

  getFromTokenBalance(): string {
    if (!this.swapFromToken) {
      return '0';
    }

    // First, try to get RPC balance (more accurate)
    const rpcBalance = this.rpcBalanceCache.get(this.swapFromToken.address.toLowerCase());
    if (rpcBalance) {
      // Use the formatted balance with decimals
      return rpcBalance.formattedWithDecimals || rpcBalance.balanceFormatted || '0';
    }

    // If native token (BNB)
    if (this.swapFromToken.isNative && this.realWalletBalance) {
      const balance = Number(this.realWalletBalance.nativeBalance) || 0;
      return balance.toFixed(4);
    }

    // If ERC20 token
    const tokenBalance = this.walletTokenBalances.find(
      t => t.address.toLowerCase() === this.swapFromToken?.address.toLowerCase()
    );
    if (tokenBalance) {
      const balance = Number(tokenBalance.balance) / Math.pow(10, tokenBalance.decimals);
      return balance.toFixed(4);
    }

    return '0';
  }

  getToTokenBalance(): string {
    if (!this.swapToToken) {
      return '0';
    }

    // First, try to get RPC balance (more accurate)
    const rpcBalance = this.rpcBalanceCache.get(this.swapToToken.address.toLowerCase());
    if (rpcBalance) {
      // Use the formatted balance with decimals
      return rpcBalance.formattedWithDecimals || rpcBalance.balanceFormatted || '0';
    }

    // If native token (BNB)
    if (this.swapToToken.isNative && this.realWalletBalance) {
      const balance = Number(this.realWalletBalance.nativeBalance) || 0;
      return balance.toFixed(4);
    }

    // If ERC20 token
    const tokenBalance = this.walletTokenBalances.find(
      t => t.address.toLowerCase() === this.swapToToken?.address.toLowerCase()
    );
    if (tokenBalance) {
      const balance = Number(tokenBalance.balance) / Math.pow(10, tokenBalance.decimals);
      return balance.toFixed(4);
    }

    return '0';
  }

  getSwapRate(): string {
    const fromAmount = Number(this.swapAmount);
    const toAmount = Number(this.swapQuote);
    if (!Number.isFinite(fromAmount) || !Number.isFinite(toAmount) || fromAmount <= 0) {
      return '0';
    }
    return (toAmount / fromAmount).toFixed(6);
  }

  ngOnDestroy(): void {
    // Clean up all RPC polling intervals
    this.rpcPollingIntervals.forEach((interval) => {
      clearInterval(interval);
    });
    this.rpcPollingIntervals.clear();
    this.rpcBalanceCache.clear();

    this.destroy$.next();
    this.destroy$.complete();
  }

  public updateOptionsData = {
    "1m": {
      xaxis: {
        min: new Date("28 Jan 2013").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    "6m": {
      xaxis: {
        min: new Date("27 Sep 2012").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    "1y": {
      xaxis: {
        min: new Date("27 Feb 2012").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    "1yd": {
      xaxis: {
        min: new Date("01 Jan 2013").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    all: {
      xaxis: {
        min: undefined,
        max: undefined
      }
    }
  };

  public updateOptions(option: any): void {
    this.activeOptionButton = option;
    this.chart.updateOptions(this.updateOptionsData[option], false, true, true);
  }

  getBalanceData(data: any) {
    let month = data.target.value;
    switch (month) {
      case "january":
        this.walletBalanceData = [
          {
            text: "Available Balance",
            amount: "$ 1211.39",
            subamount: "+ 0.0014.23 ( 0.2 % )",
            income: "$ 468.46",
            expense: "$ 127.38",
            chartSeries: [47, 68, 49],
            balancelist: [
              {
                text: "Ethereum",
                coin: "2.5701 ETH",
                amount: "$ 723.64",
              },
              {
                text: "Bitcoin",
                coin: "0.8552 BTC",
                amount: "$ 1225.32",
              },
              {
                text: "Litecoin",
                coin: "35.7411 LTC",
                amount: "$ 4563.09",
              },
            ],
          },
        ];
        break;
      case "february":
        this.walletBalanceData = [
          {
            text: "Available Balance",
            amount: "$ 2111.39",
            subamount: "+ 0.0014.23 ( 0.2 % )",
            income: "$ 2168.46",
            expense: "$ 927.38",
            chartSeries: [38, 78, 48],
            balancelist: [
              {
                text: "Ethereum",
                coin: "2.5701 ETH",
                amount: "$ 1123.64",
              },
              {
                text: "Bitcoin",
                coin: "0.8552 BTC",
                amount: "$ 4025.32",
              },
              {
                text: "Litecoin",
                coin: "35.7411 LTC",
                amount: "$ 2263.09",
              },
            ],
          },
        ]
        break;
      case "march":
        this.walletBalanceData = [
          {
            text: "Available Balance",
            amount: "$ 1011.39",
            subamount: "+ 0.0014.23 ( 0.2 % )",
            income: "$ 668.46",
            expense: "$ 427.38",
            chartSeries: [36, 58, 78],
            balancelist: [
              {
                text: "Ethereum",
                coin: "2.5701 ETH",
                amount: "$ 523.64",
              },
              {
                text: "Bitcoin",
                coin: "0.8552 BTC",
                amount: "$ 1025.32",
              },
              {
                text: "Litecoin",
                coin: "14.7411 LTC",
                amount: "$ 6563.09",
              },
            ],
          }
        ];
        break;
      case "december":
        this.walletBalanceData = [
          {
            text: "Available Balance",
            amount: "$ 1011.39",
            subamount: "+ 0.0014.23 ( 0.2 % )",
            income: "$ 668.46",
            expense: "$ 427.38",
            chartSeries: [25, 58, 47],
            balancelist: [
              {
                text: "Ethereum",
                coin: "2.5701 ETH",
                amount: "$ 523.64",
              },
              {
                text: "Bitcoin",
                coin: "0.8552 BTC",
                amount: "$ 1025.32",
              },
              {
                text: "Litecoin",
                coin: "14.7411 LTC",
                amount: "$ 6563.09",
              },
            ],
          },

        ]
        break;
    }
  }

  private _fetchData() {
    this.walletRadialChart = walletRadialChart;
    this.overviewChart = overviewChart;
    this.bitconinChart = bitconinChart;
    this.ethereumChart = ethereumChart;
    this.litecoinChart = litecoinChart;

    // Initialize with empty or default transactions
    // The actual transactions will be loaded from BlockchainService
    this.transactionsData = [];
  }

  private decodeJwtPayload(token: string): Record<string, any> | null {
    try {
      const payload = token.split('.')[1];
      if (!payload) {
        return null;
      }
      const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
      const padded = base64 + '==='.slice((base64.length + 3) % 4);
      const json = decodeURIComponent(
        atob(padded)
          .split('')
          .map(char => `%${`00${char.charCodeAt(0).toString(16)}`.slice(-2)}`)
          .join('')
      );
      return JSON.parse(json);
    } catch {
      return null;
    }
  }
}
