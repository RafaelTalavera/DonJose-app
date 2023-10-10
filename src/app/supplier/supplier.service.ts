import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SupplierComponent } from './supplier.component';
import { Supplier } from './supplier';


@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private urlEndPoint: string = 'http://localhost:8080/api/supplier';
  constructor( private http: HttpClient) { }

  getSupplier(): Observable<Supplier[]>{
    return this.http.get<Supplier[]>(this.urlEndPoint)
  }

}
