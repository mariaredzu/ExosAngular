import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  transactions: any[] = [];
  selectedValue: string = '';

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
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
