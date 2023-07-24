import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SizesComponent } from './sizes.component';
import { CreateSizeComponent } from './create-size/create-size.component';
import { ViewSizeComponent } from './view-size/view-size.component';
import { ViewAllSizesComponent } from './view-all-sizes/view-all-sizes.component'

const routes: Routes = [{ path: '', component: SizesComponent }
{ path: 'create-size', component: CreateSizeComponent },
{ path: 'view-size/:id', component: ViewSizeComponent },
{ path: 'view-all-sizes', component: ViewAllSizesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SizesRoutingModule { }
