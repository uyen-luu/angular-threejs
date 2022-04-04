import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CustomerModel } from 'src/app/shared/models/customer.model';
import { CustomerState } from '../../store/reducer/customer.reducer';
import { selectCustomers } from '../../store/selector/customer.selectors';
import * as CustomerActions from './../../store/action/customer.actions';

@Component({
  selector: 'app-state-management',
  templateUrl: './state-management.component.html',
  styleUrls: ['./state-management.component.scss'],
})
export class StateManagementComponent implements OnInit {
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
