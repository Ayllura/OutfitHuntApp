import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialRoutingModule } from './material-routing.module';
import { MaterialComponent } from './material.component';
import { CreateMaterialComponent } from './create-material/create-material.component';
import { ViewMaterialComponent } from './view-material/view-material.component';
import { ViewAllMaterialComponent } from './view-all-material/view-all-material.component';
import { FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import { UpdateMaterialComponent } from './update-material/update-material.component';

@NgModule({
  declarations: [
    MaterialComponent,
    CreateMaterialComponent,
    ViewMaterialComponent,
    ViewAllMaterialComponent,
    UpdateMaterialComponent
  ],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MaterialModule { }