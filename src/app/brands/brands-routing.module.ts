import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './brands.component';
import { CreateBrandComponent } from './create-brand/create-brand.component';
import { ViewAllBrandsComponent } from './view-all-brands/view-all-brands.component';
import { ViewBrandsComponent } from './view-brands/view-brands.component';
import { UpdateBrandComponent } from './update-brand/update-brand.component'; // Import the UpdateBrandComponent

const routes: Routes = [
  { path: '', component: BrandsComponent },
  { path: 'create-brand', component: CreateBrandComponent },
  { path: 'view-brands', component: ViewBrandsComponent },
  { path: 'view-all-brands', component: ViewAllBrandsComponent },
  { path: 'update/:id', component: UpdateBrandComponent }, // Define the 'update' route with the ':id' parameter
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandsRoutingModule { }
