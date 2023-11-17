import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionDetailService } from '../transaction-detail.service';

@Component({
  selector: 'app-transaction-detail',
  template: `
  <div *ngIf="transactionDetail" class="bg-warning bg-opacity-25 row text-center justify-content-center m-5 p-4">
    <div class="mb-3">
      <h2 class="mb-3"><b>Transaction {{ transactionDetail.id }} Detail</b></h2>
      <div class="mb-3"><b>Label:</b> {{ transactionDetail.label }}</div>
      <div class="mb-3"><b>Date:</b> {{ transactionDetail.date }}</div>
      <div class="mb-3"><b>Amount:</b> {{ transactionDetail.amount }} €</div>
      <div class="mb-3"><b>Balance:</b> {{ transactionDetail.balance }} €</div>
      <div class="mb-3"><b>Description:</b> {{ transactionDetail.description }}</div>
    </div>
    <button class="w-25" [routerLink]="['']">Back</button>
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
