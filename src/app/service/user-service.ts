import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './../model/user';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getAllUsers(companyId: number, projectId: number): Observable<User[]>{
    const url = '/api/user/company/' + companyId + '/project/' + projectId;
    return this.httpClient.get<User[]>(url);
  }

  delete(id: number): Observable<void> {
    const url = '/api/user/' + id;
    return this.httpClient.delete<void>(url);
  }
}
