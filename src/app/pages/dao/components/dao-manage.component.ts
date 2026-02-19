import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { DaoProposal } from '../../../core/models/dao.model';
import { DaoService } from '../../../core/services/dao.service';

@Component({
  selector: 'app-dao-manage',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule],
  templateUrl: './dao-manage.component.html',
  styleUrl: './dao-manage.component.scss'
})
export class DaoManageComponent implements OnInit {
  proposals: DaoProposal[] = [];
  formVisible = false;
  editMode = false;
  formData: any = this.getEmptyForm();

  constructor(private daoService: DaoService) { }

  ngOnInit(): void {
    this.loadProposals();
  }

  loadProposals(): void {
    this.daoService.getProposals().subscribe(proposals => {
      this.proposals = proposals;
    });
  }

  toggleForm(): void {
    this.formVisible = !this.formVisible;
    if (!this.formVisible) {
      this.resetForm();
    }
  }

  editProposal(proposal: DaoProposal): void {
    this.editMode = true;
    this.formVisible = true;
    this.formData = JSON.parse(JSON.stringify(proposal));
  }

  saveProposal(): void {
    if (this.editMode) {
      this.daoService.updateProposal(this.formData).subscribe(() => {
        this.loadProposals();
        this.resetForm();
      });
    } else {
      const newProposal: DaoProposal = {
        ...this.formData,
        id: Math.random().toString(36).substr(2, 9),
        currentVotes: 0,
        currentFunding: 0,
        status: 'active',
        startDate: new Date(),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        votesRequired: 1000,
        minimumHoldingDays: 30
      };

      this.daoService.addProposal(newProposal).subscribe(() => {
        this.loadProposals();
        this.resetForm();
      });
    }
  }

  deleteProposal(id: string): void {
    if (confirm('Are you sure?')) {
      this.daoService.deleteProposal(id).subscribe(() => {
        this.loadProposals();
      });
    }
  }

  cancelForm(): void {
    this.resetForm();
  }

  resetForm(): void {
    this.formVisible = false;
    this.editMode = false;
    this.formData = this.getEmptyForm();
  }

  private getEmptyForm(): any {
    return {
      name: '',
      description: '',
      category: '',
      targetFunding: 0,
      details: {
        industry: '',
        location: '',
        expectedReturn: 0,
        team: '',
        businessPlan: ''
      }
    };
  }
}
