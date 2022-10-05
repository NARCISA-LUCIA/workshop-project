import { Company } from '../model/company';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CompanyService {
 
  constructor(private httpClient: HttpClient) {}

  getAllCompanies(): Observable<Company[]> {
    const url = '/api/company/all';
    return this.httpClient.get<Company[]>(url);
  }

  delete(id: number): Observable<void> {
    // throw new Error('Method not implemented.');
    const url = '/api/company/' + id;
    return this.httpClient.delete<void>(url);
  }
}
