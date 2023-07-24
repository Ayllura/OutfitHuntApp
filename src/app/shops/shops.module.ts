import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopsRoutingModule } from './shops-routing.module';
import { ShopsComponent } from './shops.component';
import { CreateShopComponent } from './create-shop/create-shop.component';
import { ViewShopComponent } from './view-shop/view-shop.component';
import { ViewAllShopComponent } from './view-all-shop/view-all-shop.component';


@NgModule({
  declarations: [
    ShopsComponent,
    CreateShopComponent,
    ViewShopComponent,
    ViewAllShopComponent
  ],
  imports: [
    CommonModule,
    ShopsRoutingModule
  ]
})
export class ShopsModule { }
