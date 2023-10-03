import { Injectable } from '@angular/core';
import { Cust } from './cust';
import { CUSTOMERS } from './customer.json';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  getCustomer(): Observable<Cust[]> {
    return of(CUSTOMERS);
  } 
}
