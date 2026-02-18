import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { fetchorderData } from 'src/app/store/Crypto/crypto.actions';
import { selectData } from 'src/app/store/Crypto/crypto-selector';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  standalone: false
})

export class OrdersComponent implements OnInit {
  // breadcrumb items
  breadCrumbItems: Array<{}>;
  endItem: number = 10;
  orderList: any
  total: Observable<number>;
  returnedArray: any;
  term: any;
  pageSize = 10; // Default page size
  startItem: number = 0
  constructor(public store: Store) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Crypto' }, { label: 'Orders', active: true }];

    setTimeout(() => {
      this.store.dispatch(fetchorderData());
      this.store.select(selectData).subscribe(data => {
        this.orderList = data
        this.returnedArray = data
        this.orderList = this.returnedArray.slice(0, 10);
      })
      document.getElementById('elmLoader')?.classList.add('d-none')
    }, 1200);
  }

  // pagechanged
  pageChanged(event: any): void {
    this.startItem = (event.page - 1) * event.itemsPerPage;
    this.endItem = event.page * event.itemsPerPage;

    this.filterdata();
  }
  // fiter job
  searchCoin() {
    var coin = (document.getElementById('select2') as HTMLInputElement).value;
    if (coin) {
      this.orderList = this.returnedArray.filter((es: any) => {
        return es.coin === coin
      })
    } else {
      this.orderList = this.returnedArray
    }
  }

  // filterdata
  filterdata() {
    let data = this.returnedArray;

    if (this.term) {
      data = this.returnedArray.filter((el: any) =>
        el.type.toLowerCase().includes(this.term.toLowerCase())
      );
    }

    this.orderList = data.slice(this.startItem, this.endItem);
  }

  // pageper item selected
  updatePageSize() {
    this.orderList = this.returnedArray.slice(0, this.pageSize);
  }
  
  // search buy
  searchType() {
    var type = (document.getElementById('select3') as HTMLInputElement).value;
    if (type) {
      this.orderList = this.returnedArray.filter((es: any) => {
        return es.type === type
      })
    } else {
      this.orderList = this.returnedArray
    }
  }

  // search buy
  searchStatus() {
    var status = (document.getElementById('select4') as HTMLInputElement).value;
    if (status) {
      this.orderList = this.returnedArray.filter((es: any) => {
        return es.status === status
      })
    } else {
      this.orderList = this.returnedArray
    }
  }
}
