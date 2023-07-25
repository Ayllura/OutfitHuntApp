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
    console.log(genderAgeBody);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Adicione outros cabeçalhos, como autorização, se necessário.
      })
    };
    return this.httpClient.post<GenderAge>(this.apiUrl, genderAgeBody, httpOptions); //return an observable
  }

  updateGenderAge(genderAgeBody: any): Observable<GenderAge> {
    return this.httpClient.put<GenderAge>(this.apiUrl, genderAgeBody); //return an observable
  }

  deleteGenderAge(id: number): Observable<GenderAge> {
    return this.httpClient.delete<GenderAge>(this.apiUrl + "/" + id); //return an observable
  }

  getGenderAge(id: number): Observable<GenderAge> {
    return this.httpClient.get<GenderAge>(this.apiUrl + "/" + id); //return an observable
  }

  getAllGenderAges(): Observable<GenderAge[]> {
    return this.httpClient.get<GenderAge[]>(this.apiUrl); //return an observable
  }
}
