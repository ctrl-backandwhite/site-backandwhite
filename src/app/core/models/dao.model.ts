export interface DaoProposal {
    id: string;
    name: string;
    description: string;
    category: 'retail' | 'food' | 'ecommerce' | 'technology' | 'finance' | 'other';
    image: string;
    targetFunding: number;
    currentFunding: number;
    votesRequired: number;
    currentVotes: number;
    status: 'active' | 'approved' | 'rejected' | 'completed';
    startDate: Date;
    endDate: Date;
    details: {
        industry: string;
        location: string;
        team: string;
        businessPlan: string;
        expectedReturn: string;
    };
    userVote?: {
        amount: number;
        timestamp: Date;
    };
    minimumHoldingDays: number;
}

export interface UserVote {
    userId: string;
    proposalId: string;
    tokensStaked: number;
    holdingDays: number;
    timestamp: Date;
    status: 'pending' | 'confirmed' | 'refunded';
}

export interface UserTokenInfo {
    balance: number;
    stakedAmount: number;
    holdingDays: number;
    canVote: boolean;
    lastPurchaseDate: Date;
}
