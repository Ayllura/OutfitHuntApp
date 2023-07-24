import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Brands } from './brands';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor() { }
}
