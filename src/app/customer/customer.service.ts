import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cust } from './cust';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private urlEndPoint: string = 'http://localhost:8080/api/customer';

  constructor(private http: HttpClient) { }

  getCustomer(): Observable<Cust[]> {
    return this.http.get<Cust[]>(this.urlEndPoint);
  }
}
