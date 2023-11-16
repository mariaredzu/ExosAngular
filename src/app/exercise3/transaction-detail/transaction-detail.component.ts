import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionDetailService } from '../transaction-detail.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {
  transactionDetail: any;

  constructor(
    private route: ActivatedRoute,
    private transactionDetailService: TransactionDetailService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : null;

    if (id !== null) {
      this.transactionDetailService.getTransactionDetail(id).subscribe((data) => {
        this.transactionDetail = data;
      });
    } else {
      console.error('Invalid or missing transaction ID');
    }
  }
}
