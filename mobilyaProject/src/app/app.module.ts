import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment'
import { AppRoutingModule, routingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AuthComponent } from './services/auth/auth.component';
import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { FirebaseService } from './services/firebase.service';
import { UrunlerComponent } from './urunler/urunler.component';
import { KategoriComponent } from './kategori/kategori.component';
import { DetayComponent } from './detay/detay.component';
import { SatinalComponent } from './satinal/satinal.component';
import { AdminComponent } from './admin/admin.component';
import { NotFindPage404Component } from './not-find-page404/not-find-page404.component';
import { KategorilerComponent } from './kategoriler/kategoriler.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';







@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    NavigationComponent,
    MainPageComponent,
    AuthComponent,
    UrunlerComponent,
    KategoriComponent,
    DetayComponent,
    SatinalComponent,
    AdminComponent,
    NotFindPage404Component,
    KategorilerComponent,
    ProductComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule,
    MatButtonModule


  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent] 
})

export class AppModule {
  
  

}
