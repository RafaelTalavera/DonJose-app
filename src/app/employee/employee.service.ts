import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private urlEndPoint: string = 'http://localhost:8080/api/employee';

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<Employee[]>{
   return this.http.get<Employee[]>(this.urlEndPoint);
}
}
