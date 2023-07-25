import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductTypeComponent } from './product-type.component';
import { CreateProductTypeComponent } from './create-product-type/create-product-type.component';
import { ViewAllProductTypeComponent } from './view-all-product-type/view-all-product-type.component';
import { ViewProductTypeComponent } from './view-product-type/view-product-type.component';
import { UpdateProductTypeComponent } from './update-product-type/update-product-type.component'; // Import the UpdateBrandComponent

const routes: Routes = [
    { path: '', component: ProductTypeComponent },
    { path: 'create-product-type', component: CreateProductTypeComponent },
    { path: 'view-all-product-type', component: ViewAllProductTypeComponent },
    { path: 'view-product-type/:id', component: ViewProductTypeComponent }, // Update the route path here
    { path: 'update/:id', component: UpdateProductTypeComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductTypeRoutingModule { }