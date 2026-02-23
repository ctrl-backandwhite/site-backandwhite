import { Component, OnInit, Output, EventEmitter, Inject, DOCUMENT } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { LanguageService } from '../../core/services/language.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { changesLayout } from 'src/app/store/layouts/layout.actions';
import { getLayoutMode } from 'src/app/store/layouts/layout.selector';
import { RootReducerState } from 'src/app/store';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SimplebarAngularModule } from 'simplebar-angular';
import { AuthService } from '../../core/auth/services/auth.service';
import { BlockchainService } from '../../core/services/blockchain.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  imports: [CommonModule, TranslateModule, BsDropdownModule, SimplebarAngularModule]
})

/**
 * Topbar component
 */
export class TopbarComponent implements OnInit {
  mode: any
  element: any;
  cookieValue: any;
  flagvalue: any;
  countryName: any;
  valueset: any;
  theme: any;
  layout: string;
  dataLayout$: Observable<string>;
  // Define layoutMode as a property

  // Metamask properties
  isMetamaskConnected = false;
  walletAddress: string = '';
  isConnectingMetamask = false;

  // User properties
  userDisplayName: string = '';

  constructor(@Inject(DOCUMENT) private document: any,
    private authService: AuthService,
    private blockchainService: BlockchainService,
    public languageService: LanguageService,
    public translate: TranslateService,
    public _cookiesService: CookieService, public store: Store<RootReducerState>) {

  }

  listLang: any = [
    { text: 'English', flag: 'assets/images/flags/us.jpg', lang: 'en' },
    { text: 'Español', flag: 'assets/images/flags/spain.jpg', lang: 'es' },
    { text: 'Português', flag: 'assets/images/flags/portugal.svg', lang: 'pt' },
    { text: 'Deutsch', flag: 'assets/images/flags/germany.jpg', lang: 'de' },
    { text: 'Italiano', flag: 'assets/images/flags/italy.jpg', lang: 'it' },
    { text: 'Русский', flag: 'assets/images/flags/russia.jpg', lang: 'ru' },
    { text: 'Français', flag: 'assets/images/flags/french.jpg', lang: 'fr' },
    { text: '中文（繁體）', flag: 'assets/images/flags/china.svg', lang: 'zh-Hant' }
  ];

  openMobileMenu: boolean;

  @Output() settingsButtonClicked = new EventEmitter();
  @Output() mobileMenuButtonClicked = new EventEmitter();

  ngOnInit() {
    // this.initialAppState = initialState;
    this.store.select('layout').subscribe((data) => {
      this.theme = data.DATA_LAYOUT;
    })
    this.openMobileMenu = false;
    this.element = document.documentElement;

    this.cookieValue = this._cookiesService.get('lang');
    const val = this.listLang.filter(x => x.lang === this.cookieValue);
    this.countryName = val.map(element => element.text);
    if (val.length === 0) {
      if (this.flagvalue === undefined) { this.valueset = 'assets/images/flags/us.jpg'; }
    } else {
      this.flagvalue = val.map(element => element.flag);
    }

    // Load user info from JWT token
    const token = this.authService.getAccessToken();
    if (token) {
      const tokenPayload = this.decodeJwtPayload(token);
      const firstName = tokenPayload?.firstName?.trim() || '';
      const lastName = tokenPayload?.lastName?.trim() || '';
      this.userDisplayName = `${firstName} ${lastName}`.trim();
    }

    this.syncMetamaskState();
    this.bindMetamaskListeners();
  }

  setLanguage(text: string, lang: string, flag: string) {
    this.countryName = text;
    this.flagvalue = flag;
    this.cookieValue = lang;
    this.languageService.setLanguage(lang);
  }

  /**
   * Toggles the right sidebar
   */
  toggleRightSidebar() {
    this.settingsButtonClicked.emit();
  }

  /**
   * Toggle the menu bar when having mobile screen
   */
  toggleMobileMenu(event: any) {
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
  }

  /**
   * Logout the user
   */
  logout() {
    this.authService.logout().subscribe({
      next: () => {
        window.location.href = '/';
      },
      error: () => {
        window.location.href = '/';
      }
    });
  }

  /**
   * Connect/Disconnect Metamask Wallet
   */
  async connectMetamask() {
    if (typeof (window as any).ethereum === 'undefined') {
      alert('Please install MetaMask extension');
      console.error('Metamask not installed');
      return;
    }

    try {
      this.isConnectingMetamask = true;
      console.log('Starting Metamask connection...');

      if (this.isMetamaskConnected) {
        this.syncMetamaskState();
        return;
      } else {
        // Connect logic
        console.log('Requesting Metamask accounts...');
        const accounts = await (window as any).ethereum.request({
          method: 'eth_requestAccounts'
        });

        if (accounts && accounts.length > 0) {
          this.updateMetamaskState(accounts);
        } else {
          console.warn('No accounts returned from Metamask');
          alert('No accounts available in MetaMask');
        }
      }
    } catch (error: any) {
      console.error('Error connecting to Metamask:', error);

      // Handle user rejection
      if (error.code === 4001) {
        console.log('User rejected the wallet connection');
      }
      alert('Failed to connect to MetaMask: ' + (error.message || 'Unknown error'));
    } finally {
      this.isConnectingMetamask = false;
    }
  }

  private bindMetamaskListeners(): void {
    const ethereum = (window as any).ethereum;
    if (!ethereum?.on) {
      return;
    }

    ethereum.on('accountsChanged', (accounts: string[]) => {
      this.updateMetamaskState(accounts);
    });
  }

  private async syncMetamaskState(): Promise<void> {
    const ethereum = (window as any).ethereum;
    if (!ethereum?.request) {
      return;
    }

    try {
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      this.updateMetamaskState(accounts || []);
    } catch (error) {
      console.warn('Could not check MetaMask accounts:', error);
    }
  }

  private updateMetamaskState(accounts: string[]): void {
    if (accounts && accounts.length > 0) {
      this.walletAddress = accounts[0];
      this.isMetamaskConnected = true;
      this.blockchainService.setConnectedAddress(this.walletAddress);
      console.log('Wallet connected:', this.walletAddress);
    } else {
      this.walletAddress = '';
      this.isMetamaskConnected = false;
    }
  }

  /**
   * Decode JWT payload
   */
  decodeJwtPayload(token: string): any {
    try {
      const payload = token.split('.')[1];
      const decoded = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
      return JSON.parse(decoded);
    } catch (error) {
      console.error('Error decoding JWT:', error);
      return null;
    }
  }

  /**
   * Fullscreen method
   */
  fullscreen() {
    document.body.classList.toggle('fullscreen-enable');
    if (
      !document.fullscreenElement && !this.element.mozFullScreenElement &&
      !this.element.webkitFullscreenElement) {
      if (this.element.requestFullscreen) {
        this.element.requestFullscreen();
      } else if (this.element.mozRequestFullScreen) {
        /* Firefox */
        this.element.mozRequestFullScreen();
      } else if (this.element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.element.webkitRequestFullscreen();
      } else if (this.element.msRequestFullscreen) {
        /* IE/Edge */
        this.element.msRequestFullscreen();
      }
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }

  changeLayout(layoutMode: string) {
    this.theme = layoutMode;
    this.store.dispatch(changesLayout({ layoutMode }));
    this.store.select(getLayoutMode).subscribe((layout) => {
      document.documentElement.setAttribute('data-layout', layout)
    })
  }
}
