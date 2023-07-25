import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductTypeRoutingModule } from './product-type-routing.module';
import { ProductTypeComponent } from './product-type.component';
import { CreateProductTypeComponent } from './create-product-type/create-product-type.component';
import { ViewProductTypeComponent } from './view-product-type/view-product-type.component';
import { ViewAllProductTypeComponent } from './view-all-product-type/view-all-product-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UpdateProductTypeComponent } from './update-product-type/update-product-type.component';


@NgModule({
  declarations: [
    ProductTypeComponent,
    CreateProductTypeComponent,
    ViewProductTypeComponent,
    ViewAllProductTypeComponent,
    UpdateProductTypeComponent
  ],
  imports: [
    CommonModule,
    ProductTypeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductTypeModule { }
