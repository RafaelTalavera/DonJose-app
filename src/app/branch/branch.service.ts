import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Branch } from './branch';
import { Employee } from '../employee/employee';



@Injectable({
  providedIn: 'root'
})
export class BranchService {
private urlEndPoint: string = 'http://localhost:8080/api/branch';

constructor(private http: HttpClient) {}



  getBranch(): Observable<Branch[]>{


   return this.http.get<Branch[]>(this.urlEndPoint);
}
}
