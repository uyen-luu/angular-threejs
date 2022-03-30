import { CustomerModel } from './../../../../shared/models/customer.model';
import { createAction, props } from '@ngrx/store';

export const addCustomer = createAction(
  '[Customer] Add Customers',
  (customer: CustomerModel) => ({customer})
);

export const addCustomersSuccess = createAction(
  '[Customer] Add Customers Success',
  props<{ data: any }>()
);

export const addCustomersFailure = createAction(
  '[Customer] Add Customers Failure',
  props<{ error: any }>()
);
