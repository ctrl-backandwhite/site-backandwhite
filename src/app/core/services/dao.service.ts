import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DaoProposal, UserTokenInfo, UserVote } from '../models/dao.model';

@Injectable({
    providedIn: 'root'
})
export class DaoService {
    private proposalsSubject = new BehaviorSubject<DaoProposal[]>([]);
    public proposals$ = this.proposalsSubject.asObservable();

    private userTokensSubject = new BehaviorSubject<UserTokenInfo>({
        balance: 1000000,
        stakedAmount: 0,
        holdingDays: 45,
        canVote: true,
        lastPurchaseDate: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000)
    });
    public userTokens$ = this.userTokensSubject.asObservable();

    private userVotesSubject = new BehaviorSubject<UserVote[]>([]);
    public userVotes$ = this.userVotesSubject.asObservable();

    constructor() {
        this.initializeProposals();
    }

    private initializeProposals(): void {
        const proposals: DaoProposal[] = [
            {
                id: 'dao-001',
                name: 'Red de Perfumerías Premium',
                description: 'Cadena de tiendas de perfumería de lujo con presencia en principales ciudades',
                category: 'retail',
                image: 'assets/images/dao/perfumery.png',
                targetFunding: 500000,
                currentFunding: 320000,
                votesRequired: 1000,
                currentVotes: 687,
                status: 'active',
                startDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
                endDate: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000),
                details: {
                    industry: 'Retail / Cosméticos',
                    location: 'España, Portugal, Italia',
                    team: '8 profesionales con 20+ años en retail',
                    businessPlan: 'Expansión a 50 tiendas en 3 años',
                    expectedReturn: '25-30% anual'
                },
                minimumHoldingDays: 30
            },
            {
                id: 'dao-002',
                name: 'Cadena de Hamburguesas Gourmet',
                description: 'Franquicia de comida rápida premium con ingredientes frescos de calidad',
                category: 'food',
                image: 'assets/images/dao/burger.png',
                targetFunding: 400000,
                currentFunding: 250000,
                votesRequired: 1000,
                currentVotes: 512,
                status: 'active',
                startDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
                endDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
                details: {
                    industry: 'Alimentos / Gastronomía',
                    location: 'Iberia, Francia, Benelux',
                    team: '6 chefs profesionales + equipo management',
                    businessPlan: '40 sucursales en 2 años',
                    expectedReturn: '20-25% anual'
                },
                minimumHoldingDays: 30
            },
            {
                id: 'dao-003',
                name: 'Plataforma E-commerce Dropshipping',
                description: 'Marketplace especializado en productos de tendencia con sistema dropshipping integrado',
                category: 'ecommerce',
                image: 'assets/images/dao/ecommerce.png',
                targetFunding: 600000,
                currentFunding: 420000,
                votesRequired: 1500,
                currentVotes: 892,
                status: 'active',
                startDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
                endDate: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000),
                details: {
                    industry: 'Tecnología / E-commerce',
                    location: 'Global (Operado desde España)',
                    team: '10 desarrolladores + marketing specialists',
                    businessPlan: 'Target: 50M USD GMV en año 1',
                    expectedReturn: '35-45% anual'
                },
                minimumHoldingDays: 30
            }
        ];

        this.proposalsSubject.next(proposals);
    }

    getProposals(): Observable<DaoProposal[]> {
        return this.proposals$;
    }

    getProposalById(id: string): DaoProposal | undefined {
        return this.proposalsSubject.value.find(p => p.id === id);
    }

    castVote(proposalId: string, tokensAmount: number): Observable<boolean> {
        return new Observable(observer => {
            setTimeout(() => {
                const userTokens = this.userTokensSubject.value;
                if (userTokens.holdingDays < 30) {
                    observer.error('Debe tener mínimo 30 días holdeando el token BW');
                    return;
                }

                if (userTokens.balance < tokensAmount) {
                    observer.error('Saldo de tokens insuficiente');
                    return;
                }

                const proposal = this.proposalsSubject.value.find(p => p.id === proposalId);
                if (!proposal) {
                    observer.error('Propuesta no encontrada');
                    return;
                }

                // Update proposal votes
                proposal.currentVotes += Math.floor(tokensAmount / 100);
                proposal.currentFunding += tokensAmount * 0.5; // Simular conversión a funding
                proposal.userVote = {
                    amount: tokensAmount,
                    timestamp: new Date()
                };

                // Update user tokens
                userTokens.stakedAmount += tokensAmount;
                userTokens.balance -= tokensAmount;
                this.userTokensSubject.next(userTokens);

                // Record vote
                const newVote: UserVote = {
                    userId: 'current-user',
                    proposalId,
                    tokensStaked: tokensAmount,
                    holdingDays: userTokens.holdingDays,
                    timestamp: new Date(),
                    status: 'confirmed'
                };
                const votes = this.userVotesSubject.value;
                votes.push(newVote);
                this.userVotesSubject.next(votes);

                // Update proposals
                this.proposalsSubject.next([...this.proposalsSubject.value]);

                observer.next(true);
                observer.complete();
            }, 500);
        });
    }

    investInProposal(proposalId: string, amount: number): Observable<boolean> {
        return new Observable(observer => {
            setTimeout(() => {
                const userTokens = this.userTokensSubject.value;
                if (userTokens.balance < amount) {
                    observer.error('Saldo insuficiente');
                    return;
                }

                const proposal = this.proposalsSubject.value.find(p => p.id === proposalId);
                if (!proposal) {
                    observer.error('Propuesta no encontrada');
                    return;
                }

                // Update proposal funding
                proposal.currentFunding += amount;

                // Update user tokens
                userTokens.balance -= amount;
                userTokens.stakedAmount += amount;
                this.userTokensSubject.next(userTokens);

                // Update proposals
                this.proposalsSubject.next([...this.proposalsSubject.value]);

                observer.next(true);
                observer.complete();
            }, 500);
        });
    }

    addProposal(proposal: DaoProposal): Observable<boolean> {
        return new Observable(observer => {
            setTimeout(() => {
                const proposals = this.proposalsSubject.value;
                proposals.push(proposal);
                this.proposalsSubject.next([...proposals]);
                observer.next(true);
                observer.complete();
            }, 300);
        });
    }

    updateProposal(proposal: DaoProposal): Observable<boolean> {
        return new Observable(observer => {
            setTimeout(() => {
                const proposals = this.proposalsSubject.value.map(p =>
                    p.id === proposal.id ? { ...p, ...proposal } : p
                );
                this.proposalsSubject.next(proposals);
                observer.next(true);
                observer.complete();
            }, 300);
        });
    }

    deleteProposal(id: string): Observable<boolean> {
        return new Observable(observer => {
            setTimeout(() => {
                const proposals = this.proposalsSubject.value.filter(p => p.id !== id);
                this.proposalsSubject.next(proposals);
                observer.next(true);
                observer.complete();
            }, 300);
        });
    }

    getUserTokenInfo(): Observable<UserTokenInfo> {
        return this.userTokens$;
    }

    getUserVotes(): Observable<UserVote[]> {
        return this.userVotes$;
    }
}
