import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { DaoProposal } from '../../../core/models/dao.model';

@Component({
    selector: 'app-dao-voting-modal',
    standalone: true,
    imports: [CommonModule, TranslateModule, FormsModule],
    templateUrl: './dao-voting-modal.component.html',
    styleUrls: ['./dao-voting-modal.component.scss']
})
export class DaoVotingModalComponent {
    @Input() visible = false;
    @Input() proposal: DaoProposal | null = null;
    @Input() userBalance = 0;
    @Output() close = new EventEmitter<void>();
    @Output() submit = new EventEmitter<{ amount: number }>();

    amount = 0;
    quickAmounts = [100, 500, 1000, 5000];

    onClose(): void {
        this.close.emit();
        this.amount = 0;
    }

    setAmount(value: number): void {
        this.amount = value;
    }

    onSubmit(): void {
        if (this.amount > 0 && this.amount <= this.userBalance) {
            this.submit.emit({ amount: this.amount });
            this.amount = 0;
        }
    }
}
