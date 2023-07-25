import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductType } from './product-type';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {
  apiUrl: string = "";
  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl + "ProductType"; // This will result in something like "http://localhost:7222/api/ProductType"
  }

  createProductType(productTypeBody: any): Observable<ProductType> {
    console.log(productTypeBody);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post<ProductType>(this.apiUrl, productTypeBody, httpOptions);
  }

  updateProductType(id: number, productTypeBody: any): Observable<ProductType> {
    return this.httpClient.put<ProductType>(this.apiUrl + "/" + id, productTypeBody); //return an observable
  }

  getProductTypeById(id: number): Observable<ProductType> {
    return this.httpClient.get<ProductType>(`${this.apiUrl}/${id}`);
  }

  deleteProductType(id: number): Observable<ProductType> {
    return this.httpClient.delete<ProductType>(this.apiUrl + "/" + id); //return an observable
  }

  getProductType(id: number): Observable<ProductType> {
    return this.httpClient.get<ProductType>(this.apiUrl + "/" + id); //return an observable
  }

  getAllProductType(): Observable<ProductType[]> {
    return this.httpClient.get<ProductType[]>(this.apiUrl); //return an observable
  }
}