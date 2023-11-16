import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  transactions: any[] = [];
  selectedValue: string = '';
  showTransactionDetailComponent: boolean = false;

  constructor(private transactionService: TransactionService, private router: Router) {}

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe((data) => {
      this.transactions = data;
    });

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.showTransactionDetailComponent = false;
      });
  }

  filterTable() {
    if (this.selectedValue === '') {
      return this.transactions;
    } else {
      return this.transactions.filter(trans => trans.id.toString() === this.selectedValue);
    }
  }

  showTransactionDetail(id: number): void {
    this.showTransactionDetailComponent = true;
    this.router.navigate([{ outlets: { transactionOutlet: ['transaction', id] } }]);
  }
}
