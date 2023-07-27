import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenderAge } from './gender-age';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenderAgeService {
  apiUrl: string = "";
  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl + "GenderAges";
  }

  createGenderAge(genderAgeBody: any): Observable<GenderAge> {

    const httpOptions = {

      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post<GenderAge>(this.apiUrl, genderAgeBody, httpOptions); //returns an observable
  }

  updateGenderAge(genderAgeBody: any): Observable<GenderAge> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.put<GenderAge>(this.apiUrl, genderAgeBody); //returns an observable
  }

  deleteGenderAge(id: number): Observable<GenderAge> {
    return this.httpClient.delete<GenderAge>(this.apiUrl + "/" + id); //returns an observable
  }

  getGenderAge(id: number): Observable<GenderAge> {
    return this.httpClient.get<GenderAge>(this.apiUrl + "/" + id); //returns an observable
  }

  getAllGenderAges(): Observable<GenderAge[]> {
    return this.httpClient.get<GenderAge[]>(this.apiUrl); //returns an observable
  }
}
