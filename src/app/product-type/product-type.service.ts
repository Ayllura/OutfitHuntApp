import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ProductType } from './product-type';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {

  constructor() { }
}
