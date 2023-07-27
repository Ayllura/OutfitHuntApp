import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './photos.component';
import { CreatePhotoComponent } from './create-photo/create-photo.component';
import { ViewAllPhotosComponent } from './view-all-photos/view-all-photos.component';
import { ViewPhotoComponent } from './view-photo/view-photo.component';
import { UpdatePhotoComponent } from './update-photo/update-photo.component';
import { DeletePhotoComponent } from './delete-photo/delete-photo.component';


const routes: Routes = [
  { path: '', component: PhotosComponent },
  { path: 'create-photo', component: CreatePhotoComponent },
  { path: 'view-all-photos', component: ViewAllPhotosComponent },
  { path: 'view-photo/:id', component: ViewPhotoComponent },
  { path: 'update-photo/:id', component: UpdatePhotoComponent },
  { path: 'delete/photo/:id', component: DeletePhotoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
