import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'colours', loadChildren: () => import('./colours/colours.module').then(m => m.ColoursModule) }, { path: 'photos', loadChildren: () => import('./photos/photos.module').then(m => m.PhotosModule) }, { path: 'genderAge', loadChildren: () => import('./gender-age/gender-age.module').then(m => m.GenderAgeModule) }, { path: 'material', loadChildren: () => import('./material/material.module').then(m => m.MaterialModule) }, { path: 'sizes', loadChildren: () => import('./sizes/sizes.module').then(m => m.SizesModule) }, { path: 'style', loadChildren: () => import('./style/style.module').then(m => m.StyleModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
