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
          <th (click)="sortTable('id')" [class.sorted]="sortColumn === 'id'">ID<span *ngIf="sortColumn === 'id'" class="arrow">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span></th>
          <th (click)="sortTable('date')" [class.sorted]="sortColumn === 'date'">Date <span *ngIf="sortColumn === 'date'" class="arrow">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span></th>
          <th (click)="sortTable('balance')" [class.sorted]="sortColumn === 'balance'">Balance <span *ngIf="sortColumn === 'balance'" class="arrow">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span></th>
          <th (click)="sortTable('label')" [class.sorted]="sortColumn === 'label'">Label<span *ngIf="sortColumn === 'label'" class="arrow">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span></th>
          <th (click)="sortTable('amount')" [class.sorted]="sortColumn === 'amount'">Amount<span *ngIf="sortColumn === 'amount'" class="arrow">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span></th>  
        </tr>
    </thead>
    <tbody>
      <tr *ngFor="let transaction of filterTable()">
          <td class="p-3"><a [routerLink]="['/transaction', transaction.id]">{{ transaction.id }}</a></td>
          <td class="p-3">{{ transaction.date }}</td>
          <td class="p-3">{{ transaction.balance }}</td>
          <td class="p-3">{{ transaction.label }}</td>
          <td class="p-3">{{ transaction.amount }}</td>
        </tr>
      </tbody>
    </table>
</div>
  `,
})
export class HomeComponent implements OnInit {
  transactions: any[] = [];
  transactionIds: string[] = [];
  selectedValue: string = '';
  filteredTransactions: any[] = [];
  sortColumn: string = '';
  sortDirection: string = 'asc';

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

  sortTable(column: string): void {
    if (this.sortColumn === column) {

      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {

      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
  
    this.transactions = this.sortTransactions([...this.transactions]);
  }

  sortTransactions(transactions: any[]): any[] {
    if (this.sortColumn) {
      transactions.sort((a, b) => {
        const aValue = a[this.sortColumn];
        const bValue = b[this.sortColumn];
  
        if (aValue < bValue) {
          return this.sortDirection === 'asc' ? -1 : 1;
        } else if (aValue > bValue) {
          return this.sortDirection === 'asc' ? 1 : -1;
        }
  
        return 0;
      });
    }
  return transactions;
  }
}
