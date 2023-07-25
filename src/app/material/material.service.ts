import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Materials } from './material';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  apiUrl: string = "";
  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl + "Materials";
  }

  createMaterial(materialBody: any): Observable<Materials> {
    console.log(materialBody);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Adicione outros cabeçalhos, como autorização, se necessário.
      })
    };
    return this.httpClient.post<Materials>(this.apiUrl, materialBody, httpOptions); //return an observable
  }

/*   updateMaterial(id: number, materialBody: any): Observable<Materials> {
    return this.httpClient.put<Materials>(this.apiUrl + "/" + id, materialBody); //return an observable
  } */

  deleteMaterial(id: number): Observable<Materials> {
    return this.httpClient.delete<Materials>(this.apiUrl + "/" + id); //return an observable
  }

  getMaterial(id: number): Observable<Materials> {
    return this.httpClient.get<Materials>(this.apiUrl + "/" + id); //return an observable
  }

  getAllMaterial(): Observable<Materials[]> {
    return this.httpClient.get<Materials[]>(this.apiUrl); //return an observable
  }

  updateMaterialDescription(id: number, materialBody: any): Observable<Materials> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.put<Materials>(this.apiUrl + "/" + id, materialBody, httpOptions);
  }
}
