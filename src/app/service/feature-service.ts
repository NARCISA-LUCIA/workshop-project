import { Feature } from './../model/feature';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable() 
    export class FeatureService {
        constructor(
            private httpClient: HttpClient,
        ){}
  

    getAllFeatures(projectId: number): Observable <Feature[]>{
        const url = "/api/feature/project/" + projectId;
        return this.httpClient.get<Feature[]>(url);
    }

    delete(id: number): Observable <void>{
        const url = "api/feature/" + id;
        return this.httpClient.delete<void>(url);
    }
}