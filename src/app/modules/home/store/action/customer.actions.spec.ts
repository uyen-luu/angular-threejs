import * as fromCustomer from './customer.actions';

describe('addCustomers', () => {
  it('should return an action', () => {
    expect(fromCustomer.addCustomers().type).toBe('[Customer] Add Customers');
  });
});
