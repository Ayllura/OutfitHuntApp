import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColoursComponent } from './colours.component';
import { CreateColourComponent } from './create-colour/create-colour.component';
import { ViewAllColoursComponent } from './view-all-colours/view-all-colours.component';
import { ViewColourComponent } from './view-colour/view-colour.component';
import { UpdateColourComponent } from './update-colour/update-colour.component';
import { DeleteColourComponent } from './delete-colour/delete-colour.component';

const routes: Routes = [
  { path: '', component: ColoursComponent },
  { path: 'create-colour', component: CreateColourComponent },
  { path: 'view-all-colours', component: ViewAllColoursComponent },
  { path: 'view-colour/:id', component: ViewColourComponent },
  { path: 'update-colour', component: UpdateColourComponent },
  { path: 'delete/colour/:id', component: DeleteColourComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColoursRoutingModule { }
