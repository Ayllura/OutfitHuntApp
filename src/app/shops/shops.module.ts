import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopsRoutingModule } from './shops-routing.module';
import { ShopsComponent } from './shops.component';
import { CreateShopComponent } from './create-shop/create-shop.component';
import { ViewShopsComponent } from './view-shop/view-shop.component';
import { ViewAllShopsComponent } from './view-all-shop/view-all-shop.component';
import { FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import { UpdateShopComponent } from './update-shop/update-shop.component';

@NgModule({
  declarations: [
    ShopsComponent,
    CreateShopComponent,
    ViewShopsComponent,
    ViewAllShopsComponent,
    UpdateShopComponent
  ],
  imports: [
    CommonModule,
    ShopsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShopsModule { }
