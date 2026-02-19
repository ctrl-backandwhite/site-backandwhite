import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DaoProposal } from '../../../core/models/dao.model';

@Component({
    selector: 'app-dao-proposal-card',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './dao-proposal-card.component.html',
    styleUrls: ['./dao-proposal-card.component.scss']
})
export class DaoProposalCardComponent {
    @Input() proposal!: DaoProposal;
    @Input() canVote = false;
    @Output() vote = new EventEmitter<DaoProposal>();
    @Output() invest = new EventEmitter<DaoProposal>();

    onVote(): void {
        this.vote.emit(this.proposal);
    }

    onInvest(): void {
        this.invest.emit(this.proposal);
    }

    getCategoryLabel(): string {
        const labels: { [key: string]: string } = {
            retail: 'Retail',
            food: 'Alimentos',
            ecommerce: 'E-commerce',
            technology: 'Tech',
            finance: 'Finanzas',
            other: 'Otros'
        };
        return labels[this.proposal.category] || this.proposal.category;
    }

    getCategoryIcon(): string {
        const icons: { [key: string]: string } = {
            retail: 'bx-shopping-bag',
            food: 'bx-food-menu',
            ecommerce: 'bx-cart',
            technology: 'bx-code-alt',
            finance: 'bx-wallet-alt',
            other: 'bx-briefcase'
        };
        return icons[this.proposal.category] || 'bx-briefcase';
    }

    getVotePercentage(): number {
        return Math.min((this.proposal.currentVotes / this.proposal.votesRequired) * 100, 100);
    }

    getFundingPercentage(): number {
        return Math.min((this.proposal.currentFunding / this.proposal.targetFunding) * 100, 100);
    }

    getDaysLeft(): number {
        const now = new Date().getTime();
        const end = new Date(this.proposal.endDate).getTime();
        return Math.ceil((end - now) / (1000 * 60 * 60 * 24));
    }
}
