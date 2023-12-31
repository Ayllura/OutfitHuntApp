import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponent } from './material.component';
import { CreateMaterialComponent } from './create-material/create-material.component';
import { ViewMaterialComponent } from './view-material/view-material.component';
import { ViewAllMaterialComponent } from './view-all-material/view-all-material.component';
import { DeleteMaterialComponent } from './delete-material/delete-material.component';
import { UpdateMaterialComponent } from './update-material/update-material.component'

const routes: Routes = [{ path: '', component: MaterialComponent },
{ path: 'create-material', component: CreateMaterialComponent },
{ path: 'view-material/:id', component: ViewMaterialComponent },
{ path: 'view-all-material', component: ViewAllMaterialComponent },
{ path: 'update-material/:id', component: UpdateMaterialComponent },
{ path: 'delete-material/:id', component: DeleteMaterialComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
