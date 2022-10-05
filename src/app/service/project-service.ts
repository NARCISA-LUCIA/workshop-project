
import { Project} from '../model/project';

import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class ProjectService {
    constructor(
        private httpClient: HttpClient,
    ) {
    }

    getAllProjectsById(companyId:number): Observable<Project[]>{
        const url = "/api/project/company/" + companyId;
        return this.httpClient.get<Project[]>(url);
    }

    delete(id: number): Observable<void> {
        const url = '/api/project/' + id;
        return this.httpClient.delete<void>(url);
      }
}