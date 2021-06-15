import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DetayComponent } from './detay/detay.component';
import { KategoriComponent } from './kategori/kategori.component';
import { KategorilerComponent } from './kategoriler/kategoriler.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NotFindPage404Component } from './not-find-page404/not-find-page404.component';
import { SatinalComponent } from './satinal/satinal.component';
import { UrunlerComponent } from './urunler/urunler.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {path:"",component:MainPageComponent},
  {path:"login",component:LoginComponent},
  {path:"urunler",component:ProductComponent},
  {path:"kategoriler/:kategori",component:KategoriComponent},
  {path:"detay/:detay",component:DetayComponent},
  {path:"satinal/:urun",component:SatinalComponent},
  {path:"admin",component:AdminComponent},
  {path:"kategoriler",component:KategorilerComponent},
  {path:"**",component:NotFindPage404Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [LoginComponent,MainPageComponent]
