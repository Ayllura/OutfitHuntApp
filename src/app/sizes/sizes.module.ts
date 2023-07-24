import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SizesRoutingModule } from './sizes-routing.module';
import { SizesComponent } from './sizes.component';
import { CreateSizeComponent } from './create-size/create-size.component';
import { ViewSizeComponent } from './view-size/view-size.component';
import { ViewAllSizesComponent } from './view-all-sizes/view-all-sizes.component';


@NgModule({
  declarations: [
    SizesComponent,
    CreateSizeComponent,
    ViewSizeComponent,
    ViewAllSizesComponent
  ],
  imports: [
    CommonModule,
    SizesRoutingModule
  ]
})
export class SizesModule { }
