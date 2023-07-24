import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsRoutingModule } from './brands-routing.module';
import { BrandsComponent } from './brands.component';
import { CreateBrandComponent } from './create-brand/create-brand.component';
import { ViewBrandsComponent } from './view-brands/view-brands.component';
import { ViewAllBrandsComponent } from './view-all-brands/view-all-brands.component';


@NgModule({
  declarations: [
    BrandsComponent,
    CreateBrandComponent,
    ViewBrandsComponent,
    ViewAllBrandsComponent
  ],
  imports: [
    CommonModule,
    BrandsRoutingModule
  ]
})
export class BrandsModule { }