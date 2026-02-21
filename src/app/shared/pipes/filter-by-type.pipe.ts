import { Pipe, PipeTransform } from '@angular/core';
import { BlockchainTransaction } from '../../core/services/blockchain.service';

@Pipe({
    name: 'filterByType',
    standalone: true
})
export class FilterByTypePipe implements PipeTransform {
    transform(transactions: BlockchainTransaction[], type: 'buy' | 'sell' | 'transfer'): BlockchainTransaction[] {
        if (!transactions) {
            return [];
        }
        return transactions.filter(transaction => transaction.type === type);
    }
}
