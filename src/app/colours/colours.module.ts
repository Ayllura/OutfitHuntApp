import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ColoursRoutingModule } from './colours-routing.module';
import { ColoursComponent } from './colours.component';
import { CreateColourComponent } from './create-colour/create-colour.component';
import { ViewColourComponent } from './view-colour/view-colour.component';
import { ViewAllColoursComponent } from './view-all-colours/view-all-colours.component';
import { UpdateColourComponent } from './update-colour/update-colour.component';
import { DeleteColourComponent } from './delete-colour/delete-colour.component';


@NgModule({
  declarations: [
    ColoursComponent,
    CreateColourComponent,
    ViewColourComponent,
    ViewAllColoursComponent,
    UpdateColourComponent,
    DeleteColourComponent
  ],
  imports: [
    CommonModule,
    ColoursRoutingModule,
    FormsModule
  ]
})
export class ColoursModule { }
