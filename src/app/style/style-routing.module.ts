import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StyleComponent } from './style.component';
import { CreateStyleComponent } from './create-style/create-style.component';
import { ViewStyleComponent } from './view-style/view-style.component';
import { ViewAllStyleComponent } from './view-all-style/view-all-style.component'

const routes: Routes = [{ path: '', component: StyleComponent },
{ path: 'create-style', component: CreateStyleComponent },
{ path: 'view-style/:id', component: ViewStyleComponent },
{ path: 'view-all-style', component: ViewAllStyleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StyleRoutingModule { }