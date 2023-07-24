import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Brands } from './brands';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl: string = "";
  constructor(private httpClient: HttpClient) { 
    this.apiUrl = environment.apiUrl + "Brands";
  }

  createProduct(brandsBody: any): Observable<Brands>{
    console.log(brandsBody);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Adicione outros cabeçalhos, como autorização, se necessário.
      })
    };
    return this.httpClient.post<Brands>(this.apiUrl, brandsBody, httpOptions);
  }


  updateProduct(id: number, brandsBody: any): Observable<Brands>{
    return this.httpClient.put<Brands>(this.apiUrl + "/" + id, brandsBody); //return an observable
  }

  deleteProduct(id: string): Observable<Brands>{
    return this.httpClient.delete<Brands>(this.apiUrl + "/" + id); //return an observable
  }

  getProduct(id: string): Observable<Brands>{
    return this.httpClient.get<Brands>(this.apiUrl + "/" + id + "/GetBrand"); //return an observable
  }

  getAllProduct(): Observable<Brands[]>{
    return this.httpClient.get<Brands[]>(this.apiUrl); //return an observable
  } 
}