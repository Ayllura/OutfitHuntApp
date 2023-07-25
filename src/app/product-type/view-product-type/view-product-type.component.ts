import { ProductTypeService } from '../product-type.service';
import { ProductType } from '../product-type';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-product-type',
  templateUrl: './view-product-type.component.html',
  styleUrls: ['./view-product-type.component.css']
})
export class ViewProductTypeComponent implements OnInit {
  typeId = 0;
  description = ""
  constructor(private activateRoute: ActivatedRoute, private service: ProductTypeService) {
  }
  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => {
      this.typeId = data['id'];
    });
    this.service.getProductType(this.typeId).subscribe(data => {
      this.typeId = data['typeId'];
      this.description = data['description'];
    });
  }
  getProductType() {
  }
}
