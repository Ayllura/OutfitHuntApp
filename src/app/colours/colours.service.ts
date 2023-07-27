import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Colours } from './colours';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ColoursService {
  apiUrl: string = "";

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl + "Colours";
  }

  createColour(colourBody: any): Observable<Colours> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post<Colours>(this.apiUrl, colourBody, httpOptions); //returns an observable
  }

  updateColour(colourBody: any): Observable<Colours> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.put<Colours>(this.apiUrl, colourBody, httpOptions); //returns an observable
  }

  deleteColour(id: number): Observable<Colours> {
    return this.httpClient.delete<Colours>(this.apiUrl + "/" + id); //returns an observable
  }

  getColour(id: number): Observable<Colours> {
    return this.httpClient.get<Colours>(this.apiUrl + "/" + id); //returns an observable
  }

  getAllColours(): Observable<Colours[]> {
    return this.httpClient.get<Colours[]>(this.apiUrl); //returns an observable
  }
}
