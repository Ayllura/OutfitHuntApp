import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Shops } from './shops';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {
  apiUrl: string = "";
  constructor(private httpClient: HttpClient) { 
    this.apiUrl = environment.apiUrl + "Shops";
  }

  createShop(shopBody: any): Observable<Shops>{
    console.log(shopBody);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post<Shops>(this.apiUrl, shopBody, httpOptions);
  }


  updateShop(id: number, shopsBody: any): Observable<Shops>{
    return this.httpClient.put<Shops>(this.apiUrl + "/" + id, shopsBody); //return an observable
  }

  getShopById(id: number): Observable<Shops> {
    return this.httpClient.get<Shops>(`${this.apiUrl}/${id}`);
  }

  deleteShop(id: number): Observable<Shops>{
    return this.httpClient.delete<Shops>(this.apiUrl + "/" + id); //return an observable
  }

  getShops(id: number): Observable<Shops>{
    return this.httpClient.get<Shops>(this.apiUrl + "/" + id); //return an observable
  }

  getAllShops(): Observable<Shops[]>{
    return this.httpClient.get<Shops[]>(this.apiUrl); //return an observable
  } 
}