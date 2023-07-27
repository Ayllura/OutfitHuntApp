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

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post<Photos>(this.apiUrl, photoBody, httpOptions); //returns an observable
  }

  updatePhoto(photoBody: any): Observable<Photos> {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.put<Photos>(this.apiUrl, photoBody); //returns an observable
  }

  deletePhoto(id: number): Observable<Photos> {
    return this.httpClient.delete<Photos>(this.apiUrl + "/" + id); //returns an observable
  }

  getPhoto(id: number): Observable<Photos> {
    return this.httpClient.get<Photos>(this.apiUrl + "/" + id); //returns an observable
  }

  getAllPhotos(): Observable<Photos[]> {
    return this.httpClient.get<Photos[]>(this.apiUrl); //returns an observable
  }
}
