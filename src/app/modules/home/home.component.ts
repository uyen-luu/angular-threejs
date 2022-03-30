import { selectCustomers } from './store/selector/customer.selectors';
import { CustomerModel } from './../../shared/models/customer.model';
import { CustomerState } from './store/reducer/customer.reducer';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CustomerActions from './store/action/customer.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  customers$!: Observable<CustomerModel[]>;
  constructor(private store: Store<CustomerState>) {}

  ngOnInit(): void {
    this.customers$ = this.store.pipe(select(selectCustomers));
  }

  addCustomer(customerName: string): void {
    const customer = new CustomerModel();

    customer.name = customerName;
    this.store.dispatch(CustomerActions.addCustomer(customer));
  }
}
