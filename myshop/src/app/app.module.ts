import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ProductsComponent } from './components/products/products.component';
import { NazwaKomponentuComponent } from './nazwa_cieki/nazwa-komponentu/nazwa-komponentu.component';
const appRoutes: Routes = [
 
  { path: 'products', component: ProductsComponent },
  {path: 'nazwa_Komponentu', component: ProductsComponent },
  { path: 'landing', component: LandingComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' }
 ];
 

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProductsComponent,
    NazwaKomponentuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
