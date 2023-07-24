import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductTypeRoutingModule } from './product-type-routing.module';
import { ProductTypeComponent } from './product-type.component';
import { CreateProductTypeComponent } from './create-product-type/create-product-type.component';
import { ViewProductTypeComponent } from './view-product-type/view-product-type.component';
import { ViewAllProductTypesComponent } from './view-all-product-types/view-all-product-types.component';


@NgModule({
  declarations: [
    ProductTypeComponent,
    CreateProductTypeComponent,
    ViewProductTypeComponent,
    ViewAllProductTypesComponent
  ],
  imports: [
    CommonModule,
    ProductTypeRoutingModule
  ]
})
export class ProductTypeModule { }
