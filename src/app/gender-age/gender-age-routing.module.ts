import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenderAgeComponent } from './gender-age.component';
import { CreateGenderAgeComponent } from './create-gender-age/create-gender-age.component';
import { ViewGenderAgeComponent } from './view-gender-age/view-gender-age.component';
import { ViewAllGenderAgesComponent } from './view-all-gender-ages/view-all-gender-ages.component';
import { UpdateGenderAgeComponent } from './update-gender-age/update-gender-age.component';
import { DeleteGenderAgeComponent } from './delete-gender-age/delete-gender-age.component';

const routes: Routes = [
  { path: '', component: GenderAgeComponent },
  { path: 'create-gender-age', component: CreateGenderAgeComponent },
  { path: 'view-all-gender-ages', component: ViewAllGenderAgesComponent },
  { path: 'view-gender-age/:id', component: ViewGenderAgeComponent },
  { path: 'update-gender-age', component: UpdateGenderAgeComponent },
  { path: 'delete/gender-age/:id', component: DeleteGenderAgeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenderAgeRoutingModule { }
