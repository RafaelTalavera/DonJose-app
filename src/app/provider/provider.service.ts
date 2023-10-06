import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provider } from './provider';


@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private urlEndPoint: string = 'http://localhost:8080/api/provider';
  constructor( private http: HttpClient) { }

  getProvider(): Observable<Provider[]>{
    return this.http.get<Provider[]>(this.urlEndPoint)
  }

}
