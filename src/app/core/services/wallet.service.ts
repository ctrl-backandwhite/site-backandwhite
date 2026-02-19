import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface WalletInfo {
  address: string;
  balance: number;
  isConnected: boolean;
}

declare global {
  interface Window {
    ethereum?: {
      isMetaMask?: boolean;
      request: (args: { method: string; params?: unknown[] }) => Promise<any>;
      on?: (event: string, handler: (...args: any[]) => void) => void;
      removeListener?: (event: string, handler: (...args: any[]) => void) => void;
    };
  }
}

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private walletSubject = new BehaviorSubject<WalletInfo | null>(null);
  public wallet$ = this.walletSubject.asObservable();

  constructor() {
    this.loadWallet();
  }

  private loadWallet(): void {
    const savedWallet = localStorage.getItem('connected_wallet');
    if (savedWallet) {
      const wallet = JSON.parse(savedWallet);
      this.walletSubject.next(wallet);
      const provider = this.getProvider();
      if (provider) {
        this.registerProviderEvents(provider);
      }
    }
  }

  async connectWallet(): Promise<WalletInfo | null> {
    const provider = this.getProvider();
    if (!provider) {
      return null;
    }

    try {
      const accounts: string[] = await provider.request({ method: 'eth_requestAccounts' });
      if (!accounts || accounts.length === 0) {
        return null;
      }

      const address = accounts[0];
      const balanceHex: string = await provider.request({
        method: 'eth_getBalance',
        params: [address, 'latest']
      });

      const wallet: WalletInfo = {
        address,
        balance: this.formatEthBalance(balanceHex),
        isConnected: true
      };

      localStorage.setItem('connected_wallet', JSON.stringify(wallet));
      this.walletSubject.next(wallet);
      this.registerProviderEvents(provider);
      return wallet;
    } catch {
      return null;
    }
  }

  disconnectWallet(): void {
    localStorage.removeItem('connected_wallet');
    this.walletSubject.next(null);
  }

  getWallet(): WalletInfo | null {
    return this.walletSubject.value;
  }

  private getProvider() {
    return typeof window !== 'undefined' ? window.ethereum : undefined;
  }

  private formatEthBalance(balanceHex: string): number {
    try {
      const wei = BigInt(balanceHex);
      const eth = Number(wei) / 1e18;
      return Math.round(eth * 10000) / 10000;
    } catch {
      return 0;
    }
  }

  private registerProviderEvents(provider: NonNullable<Window['ethereum']>): void {
    if (!provider.on) {
      return;
    }

    provider.on('accountsChanged', (accounts: string[]) => {
      if (!accounts || accounts.length === 0) {
        this.disconnectWallet();
        return;
      }

      const address = accounts[0];
      provider
        .request({ method: 'eth_getBalance', params: [address, 'latest'] })
        .then((balanceHex: string) => {
          const wallet: WalletInfo = {
            address,
            balance: this.formatEthBalance(balanceHex),
            isConnected: true
          };
          localStorage.setItem('connected_wallet', JSON.stringify(wallet));
          this.walletSubject.next(wallet);
        })
        .catch(() => {
          this.disconnectWallet();
        });
    });

    provider.on('chainChanged', () => {
      const wallet = this.walletSubject.value;
      if (!wallet) {
        return;
      }
      provider
        .request({ method: 'eth_getBalance', params: [wallet.address, 'latest'] })
        .then((balanceHex: string) => {
          const updatedWallet: WalletInfo = {
            ...wallet,
            balance: this.formatEthBalance(balanceHex)
          };
          localStorage.setItem('connected_wallet', JSON.stringify(updatedWallet));
          this.walletSubject.next(updatedWallet);
        })
        .catch(() => {
          this.disconnectWallet();
        });
    });
  }
}
