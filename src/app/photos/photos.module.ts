import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './photos.component';
import { CreatePhotoComponent } from './create-photo/create-photo.component';
import { ViewPhotoComponent } from './view-photo/view-photo.component';
import { ViewAllPhotosComponent } from './view-all-photos/view-all-photos.component';


@NgModule({
  declarations: [
    PhotosComponent,
    CreatePhotoComponent,
    ViewPhotoComponent,
    ViewAllPhotosComponent
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule
  ]
})
export class PhotosModule { }
