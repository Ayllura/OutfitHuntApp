import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'colours', loadChildren: () => import('./colours/colours.module').then(m => m.ColoursModule) }, { path: 'photos', loadChildren: () => import('./photos/photos.module').then(m => m.PhotosModule) }, { path: 'genderAge', loadChildren: () => import('./gender-age/gender-age.module').then(m => m.GenderAgeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
