import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ColoursRoutingModule } from './colours-routing.module';
import { ColoursComponent } from './colours.component';
import { CreateColourComponent } from './create-colour/create-colour.component';
import { ViewColourComponent } from './view-colour/view-colour.component';
import { ViewAllColoursComponent } from './view-all-colours/view-all-colours.component';


@NgModule({
  declarations: [
    ColoursComponent,
    CreateColourComponent,
    ViewColourComponent,
    ViewAllColoursComponent
  ],
  imports: [
    CommonModule,
    ColoursRoutingModule,
    FormsModule
  ]
})
export class ColoursModule { }
