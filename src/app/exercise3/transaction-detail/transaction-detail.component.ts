import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionDetailService } from '../transaction-detail.service';

@Component({
  selector: 'app-transaction-detail',
  template: `
<div class="bg-warning bg-opacity-25 text-center m-5 p-4 d-flex justify-content-center">
  <div>
    <h2>Transaction {{ transactionDetail.id }} Detail</h2>
    <div>Type: {{ transactionDetail.type }}</div>
    <div>Object: {{ transactionDetail.object }}</div>
    <div>Amount: {{ transactionDetail.amount }}</div>
    <div>Total Price: {{ transactionDetail.total }} €</div>
    <div>Date: {{ transactionDetail.date }}</div>
  </div>
</div>
  `,
})
export class TransactionDetailComponent implements OnInit {
  transactionDetail: any;

  constructor(
    private route: ActivatedRoute,
    private transactionDetailService: TransactionDetailService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.transactionDetailService.getTransactionDetail(id).subscribe((data) => {
        this.transactionDetail = data;
      });
    }
  }
}
