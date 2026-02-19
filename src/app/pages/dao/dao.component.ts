import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DaoService } from '../../core/services/dao.service';
import { WalletService, WalletInfo } from '../../core/services/wallet.service';
import { DaoProposal, UserTokenInfo } from '../../core/models/dao.model';
import { DaoProposalCardComponent } from './components/dao-proposal-card.component';
import { DaoVotingModalComponent } from './components/dao-voting-modal.component';

@Component({
  selector: 'app-dao',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    DaoProposalCardComponent,
    DaoVotingModalComponent
  ],
  templateUrl: './dao.component.html',
  styleUrls: ['./dao.component.scss']
})
export class DaoComponent implements OnInit {
  proposals = signal<DaoProposal[]>([]);
  userTokenInfo = signal<UserTokenInfo | null>(null);
  wallet = signal<WalletInfo | null>(null);
  votingModalVisible = signal(false);
  selectedProposal = signal<DaoProposal | null>(null);
  isManaging = signal(false);

  constructor(
    private daoService: DaoService,
    private walletService: WalletService
  ) { }

  ngOnInit(): void {
    // Load initial data
    this.loadProposals();
    this.loadUserTokenInfo();

    // Load wallet if connected
    const savedWallet = this.walletService.getWallet();
    if (savedWallet) {
      this.wallet.set(savedWallet);
    }
  }

  private loadProposals(): void {
    this.daoService.getProposals().subscribe(proposals => {
      this.proposals.set(proposals);
    });
  }

  private loadUserTokenInfo(): void {
    this.daoService.getUserTokenInfo().subscribe(info => {
      this.userTokenInfo.set(info);
    });
  }

  toggleWallet(): void {
    if (this.wallet()) {
      this.walletService.disconnectWallet();
      this.wallet.set(null);
    } else {
      this.walletService.connectWallet().then(wallet => {
        if (wallet) {
          this.wallet.set(wallet);
        }
      });
    }
  }

  onVote(proposal: DaoProposal): void {
    this.selectedProposal.set(proposal);
    this.votingModalVisible.set(true);
  }

  onInvest(proposal: DaoProposal): void {
    this.selectedProposal.set(proposal);
    this.votingModalVisible.set(true);
  }

  submitVote(data: { amount: number }): void {
    const proposal = this.selectedProposal();
    if (!proposal) return;

    this.daoService.castVote(proposal.id, data.amount).subscribe(
      () => {
        this.votingModalVisible.set(false);
        this.loadProposals();
        this.loadUserTokenInfo();
      },
      error => {
        alert(error);
      }
    );
  }

  toggleManage(): void {
    this.isManaging.update(v => !v);
  }
}
