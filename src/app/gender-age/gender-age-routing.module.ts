import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenderAgeComponent } from './gender-age.component';

const routes: Routes = [{ path: '', component: GenderAgeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenderAgeRoutingModule { }
