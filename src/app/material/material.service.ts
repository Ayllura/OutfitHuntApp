import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Material } from './material';
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

  createMaterial(materialBody: any): Observable<Material> {
    console.log(materialBody);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Adicione outros cabeçalhos, como autorização, se necessário.
      })
    };
    return this.httpClient.post<Material>(this.apiUrl, materialBody, httpOptions); //return an observable
  }


  updateMaterial(id: number, materialBody: any): Observable<Material> {
    return this.httpClient.put<Material>(this.apiUrl + "/" + id, materialBody); //return an observable
  }

  deleteMaterial(id: number): Observable<Material> {
    return this.httpClient.delete<Material>(this.apiUrl + "/" + id); //return an observable
  }

  getMaterial(id: number): Observable<Material> {
    return this.httpClient.get<Material>(this.apiUrl + "/" + id + "/GetMaterials"); //return an observable
  }

  getAllMaterial(): Observable<Material[]> {
    return this.httpClient.get<Material[]>(this.apiUrl); //return an observable
  }
}
