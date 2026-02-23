import { Pipe, PipeTransform } from '@angular/core';
import { BlockchainTransaction } from '../../core/services/blockchain.service';

@Pipe({
    name: 'filterByType',
    standalone: true
})
export class FilterByTypePipe implements PipeTransform {
    transform(transactions: BlockchainTransaction[], type: 'buy' | 'sell' | 'transfer' | 'sent' | 'received'): BlockchainTransaction[] {
        if (!transactions) {
            return [];
        }
        if (type === 'sent') {
            return transactions.filter(transaction => transaction.text === 'Sent');
        }
        if (type === 'received') {
            return transactions.filter(transaction => transaction.text === 'Received');
        }
        return transactions.filter(transaction => transaction.type === type);
    }
}
