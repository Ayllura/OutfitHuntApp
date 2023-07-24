import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StyleRoutingModule } from './style-routing.module';
import { StyleComponent } from './style.component';
import { CreateStyleComponent } from './create-style/create-style.component';
import { ViewStyleComponent } from './view-style/view-style.component';
import { ViewAllStyleComponent } from './view-all-style/view-all-style.component';


@NgModule({
  declarations: [
    StyleComponent,
    CreateStyleComponent,
    ViewStyleComponent,
    ViewAllStyleComponent
  ],
  imports: [
    CommonModule,
    StyleRoutingModule
  ]
})
export class StyleModule { }
