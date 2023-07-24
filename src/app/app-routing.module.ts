import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'colours', loadChildren: () => import('./colours/colours.module').then(m => m.ColoursModule) }, { path: 'photos', loadChildren: () => import('./photos/photos.module').then(m => m.PhotosModule) }, { path: 'genderAge', loadChildren: () => import('./gender-age/gender-age.module').then(m => m.GenderAgeModule) }, { path: 'brands', loadChildren: () => import('./brands/brands.module').then(m => m.BrandsModule) }, { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }, { path: 'shops', loadChildren: () => import('./shops/shops.module').then(m => m.ShopsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
