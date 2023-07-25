import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopsComponent } from './shops.component';
import { CreateShopComponent } from './create-shop/create-shop.component';
import { ViewAllShopsComponent } from './view-all-shop/view-all-shop.component';
import { ViewShopsComponent } from './view-shop/view-shop.component';
import { UpdateShopComponent } from './update-shop/update-shop.component'; // Import the UpdateBrandComponent

const routes: Routes = [
    { path: '', component: ShopsComponent },
    { path: 'create-shop', component: CreateShopComponent },
    { path: 'view-all-shop', component: ViewAllShopsComponent },
    { path: 'view-shop/:id', component: ViewShopsComponent }, // Update the route path here
    { path: 'update/:id', component: UpdateShopComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopsRoutingModule { }