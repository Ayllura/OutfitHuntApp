import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Brands } from './brands';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  apiUrl: string = "";
  constructor(private httpClient: HttpClient) { 
    this.apiUrl = environment.apiUrl + "Brands";
  }

  createBrand(brandBody: any): Observable<Brands>{
    console.log(brandBody);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post<Brands>(this.apiUrl, brandBody, httpOptions);
  }


  updateBrands(id: number, brandsBody: any): Observable<Brands>{
    return this.httpClient.put<Brands>(this.apiUrl + "/" + id, brandsBody); //return an observable
  }

  getBrandById(id: number): Observable<Brands> {
    return this.httpClient.get<Brands>(`${this.apiUrl}/${id}`);
  }

  deleteBrands(id: number): Observable<Brands>{
    return this.httpClient.delete<Brands>(this.apiUrl + "/" + id); //return an observable
  }

  getBrands(id: number): Observable<Brands>{
    return this.httpClient.get<Brands>(this.apiUrl + "/" + id); //return an observable
  }

  getAllBrands(): Observable<Brands[]>{
    return this.httpClient.get<Brands[]>(this.apiUrl); //return an observable
  } 
}