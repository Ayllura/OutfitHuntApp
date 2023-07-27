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
    // Set the API URL based on the environment configuration
    this.apiUrl = environment.apiUrl + "Materials";
  }

  // Function to create a new material
  createMaterial(materialBody: any): Observable<Materials> {
    console.log(materialBody);

    // Set the HTTP headers for the request
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    // Send a POST request to create a new material and return the observable
    return this.httpClient.post<Materials>(this.apiUrl, materialBody, httpOptions);
  }

  // Function to delete a material by its ID
  deleteMaterial(id: number): Observable<Materials> {
    // Send a DELETE request to remove the material and return the observable
    return this.httpClient.delete<Materials>(this.apiUrl + "/" + id);
  }

  // Function to fetch a material by its ID
  getMaterial(id: number): Observable<Materials> {
    // Send a GET request to retrieve the material and return the observable
    return this.httpClient.get<Materials>(this.apiUrl + "/" + id);
  }

  // Function to fetch all materials
  getAllMaterial(): Observable<Materials[]> {
    // Send a GET request to retrieve all materials and return the observable
    return this.httpClient.get<Materials[]>(this.apiUrl);
  }

  // Function to update the description of a material by its ID
  updateMaterialDescription(id: number, materialBody: any): Observable<Materials> {
    // Set the HTTP headers for the request
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    // Send a PUT request to update the material's description and return the observable
    return this.httpClient.put<Materials>(this.apiUrl + "/" + id, materialBody, httpOptions);
  }
}
