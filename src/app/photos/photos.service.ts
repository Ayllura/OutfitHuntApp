import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Photos } from './photos';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  apiUrl: string = "";
  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl + "Photos";
  }

  createPhoto(photoBody: any): Observable<Photos> {
    console.log(photoBody);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Adicione outros cabeçalhos, como autorização, se necessário.
      })
    };
    return this.httpClient.post<Photos>(this.apiUrl, photoBody, httpOptions); //return an observable
  }

  updatePhoto(photoBody: any): Observable<Photos> {
    return this.httpClient.put<Photos>(this.apiUrl, photoBody); //return an observable
  }

  deletePhoto(id: number): Observable<Photos> {
    return this.httpClient.delete<Photos>(this.apiUrl + "/" + id); //return an observable
  }

  getPhoto(id: number): Observable<Photos> {
    return this.httpClient.get<Photos>(this.apiUrl + "/" + id); //return an observable
  }

  getAllPhotos(): Observable<Photos[]> {
    return this.httpClient.get<Photos[]>(this.apiUrl); //return an observable
  }
}
