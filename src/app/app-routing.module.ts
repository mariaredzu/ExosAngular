import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './exercise3/home/home.component';
import { TransactionDetailComponent } from './exercise3/transaction-detail/transaction-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'transaction/:id', component: TransactionDetailComponent, outlet: 'transactionOutlet' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
