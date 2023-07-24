import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandsRoutingModule } from './brands-routing.module';
import { BrandsComponent } from './brands.component';
import { CreateBrandComponent } from './create-brand/create-brand.component';
import { ViewBrandsComponent } from './view-brands/view-brands.component';
import { ViewAllBrandsComponent } from './view-all-brands/view-all-brands.component';
import { FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import { UpdateBrandComponent } from './update-brand/update-brand.component';

@NgModule({
  declarations: [
    BrandsComponent,
    CreateBrandComponent,
    ViewBrandsComponent,
    ViewAllBrandsComponent,
    UpdateBrandComponent
  ],
  imports: [
    CommonModule,
    BrandsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BrandsModule { }
