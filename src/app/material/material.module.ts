import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialRoutingModule } from './material-routing.module';
import { MaterialComponent } from './material.component';
import { CreateMaterialComponent } from './create-material/create-material.component';
import { ViewMaterialComponent } from './view-material/view-material.component';
import { ViewAllMaterialComponent } from './view-all-material/view-all-material.component';
import { FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import { UpdateMaterialComponent } from './update-material/update-material.component';
import { DeleteMaterialComponent } from './delete-material/delete-material.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    MaterialComponent,
    CreateMaterialComponent,
    ViewMaterialComponent,
    ViewAllMaterialComponent,
    UpdateMaterialComponent,
    DeleteMaterialComponent
  ],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }