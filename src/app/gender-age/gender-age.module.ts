import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { GenderAgeRoutingModule } from './gender-age-routing.module';
import { GenderAgeComponent } from './gender-age.component';
import { CreateGenderAgeComponent } from './create-gender-age/create-gender-age.component';
import { ViewGenderAgeComponent } from './view-gender-age/view-gender-age.component';
import { ViewAllGenderAgesComponent } from './view-all-gender-ages/view-all-gender-ages.component';
import { UpdateGenderAgeComponent } from './update-gender-age/update-gender-age.component';
import { DeleteGenderAgeComponent } from './delete-gender-age/delete-gender-age.component';


@NgModule({
  declarations: [
    GenderAgeComponent,
    CreateGenderAgeComponent,
    ViewGenderAgeComponent,
    ViewAllGenderAgesComponent,
    UpdateGenderAgeComponent,
    DeleteGenderAgeComponent
  ],
  imports: [
    CommonModule,
    GenderAgeRoutingModule,
    FormsModule
  ]
})
export class GenderAgeModule { }
