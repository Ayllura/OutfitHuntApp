import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenderAgeRoutingModule } from './gender-age-routing.module';
import { GenderAgeComponent } from './gender-age.component';
import { CreateGenderAgeComponent } from './create-gender-age/create-gender-age.component';
import { ViewGenderAgeComponent } from './view-gender-age/view-gender-age.component';
import { ViewAllGenderAgesComponent } from './view-all-gender-ages/view-all-gender-ages.component';


@NgModule({
  declarations: [
    GenderAgeComponent,
    CreateGenderAgeComponent,
    ViewGenderAgeComponent,
    ViewAllGenderAgesComponent
  ],
  imports: [
    CommonModule,
    GenderAgeRoutingModule
  ]
})
export class GenderAgeModule { }
