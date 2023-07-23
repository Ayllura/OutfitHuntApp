import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColoursComponent } from './colours.component';

const routes: Routes = [{ path: '', component: ColoursComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColoursRoutingModule { }
