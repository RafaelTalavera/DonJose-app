import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlEndPoint: string = 'http://localhost:8080/api/product';

  constructor( private http: HttpClient) { }

  getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(this.urlEndPoint)
  }

}
