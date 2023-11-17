import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionDetailService {
  constructor(private http: HttpClient) {}

  getTransactionDetail(id: string): Observable<any> {
    return this.http.get<any>(`/assets/${id}.json`);
  }
}
