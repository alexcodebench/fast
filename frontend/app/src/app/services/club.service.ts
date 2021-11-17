import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from "@env/environment";
import { Observable } from 'rxjs';
import { ClubFileData } from '@app/shared/club-models';

const API_ENDPOINT = environment.api;

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private httpClient: HttpClient) { }

  getClubs(): Observable<ClubFileData> {
    return this.httpClient.get<ClubFileData>(`${API_ENDPOINT}/clubs`);
  }

}
