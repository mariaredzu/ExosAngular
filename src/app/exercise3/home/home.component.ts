import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-home',
  template: `
  <div class="bg-warning bg-opacity-25 text-center m-5 p-4 d-flex justify-content-center">
    <div>
      <select id="selector" [(ngModel)]="selectedValue">
        <option value="">All</option>
        <option *ngFor="let item of transactions" [value]="item.id.toString()">{{ item.id }}</option>
      </select>
    </div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Amount</th>
          </tr>
    </thead>
    <tbody>
      <tr *ngFor="let transaction of filterTable()">
          <td class="p-3"><a [routerLink]="['/transaction', transaction.id]">{{ transaction.id }}</a></td>
          <td class="p-3">{{ transaction.date }}</td>
          <td class="p-3">{{ transaction.amount }}</td>
        </tr>
      </tbody>
    </table>
</div>
  `,
})
export class HomeComponent implements OnInit {
  transactions: any[] = [];
  selectedValue: string = '';


  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.transactionService.getTransactions().subscribe((data) => {
      this.transactions = data;
    });
  }

  filterTable() {
    if (this.selectedValue === '') {
      return this.transactions;
    } else {
    return this.transactions.filter(trans => trans.id.toString() === this.selectedValue);
    }
  }
}
