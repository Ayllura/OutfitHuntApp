import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialRoutingModule } from './material-routing.module';
import { MaterialComponent } from './material.component';
import { CreateMaterialComponent } from './create-material/create-material.component';
import { ViewMaterialComponent } from './view-material/view-material.component';
import { ViewAllMaterialComponent } from './view-all-material/view-all-material.component';
import { FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    MaterialComponent,
    CreateMaterialComponent,
    ViewMaterialComponent,
    ViewAllMaterialComponent
  ],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MaterialModule { }