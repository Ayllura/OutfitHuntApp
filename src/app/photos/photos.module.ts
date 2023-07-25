import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './photos.component';
import { CreatePhotoComponent } from './create-photo/create-photo.component';
import { ViewPhotoComponent } from './view-photo/view-photo.component';
import { ViewAllPhotosComponent } from './view-all-photos/view-all-photos.component';
import { DeletePhotoComponent } from './delete-photo/delete-photo.component';
import { UpdatePhotoComponent } from './update-photo/update-photo.component';


@NgModule({
  declarations: [
    PhotosComponent,
    CreatePhotoComponent,
    ViewPhotoComponent,
    ViewAllPhotosComponent,
    DeletePhotoComponent,
    UpdatePhotoComponent
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    FormsModule
  ]
})
export class PhotosModule { }
