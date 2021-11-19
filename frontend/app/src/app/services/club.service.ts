import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from '@env/environment';
import { Observable, pipe, throwError } from 'rxjs';
import { ClubFileData } from '@app/shared/club-models';

const API_ENDPOINT = environment.api;

@Injectable({
  providedIn: 'root',
})
export class ClubService {
  constructor(private httpClient: HttpClient) {}

  getClubs(): Observable<ClubFileData> {
    // NOTE: the url has to end with a '/', which matches the backend's endpoint,
    // otherwise will lead to a weird 'Mixed content' issue
    return this.httpClient.get<ClubFileData>(`${API_ENDPOINT}/clubs/`);
  }

  saveClubs(data: ClubFileData): Observable<ClubFileData> {
    return this.httpClient.post<ClubFileData>(`${API_ENDPOINT}/clubs/`, data);
  }
}
