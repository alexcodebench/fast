import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from "@env/environment";
import { Observable } from 'rxjs';

const API_ENDPOINT = environment.api;

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private httpClient: HttpClient) { }

  getClubs(): Observable<Object> {
    return this.httpClient.get(`${API_ENDPOINT}/clubs`);
  }

}
