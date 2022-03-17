import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ShopComponent } from './shop/shop.component';
import { ProductsComponent } from './shop/products/products.component';
import { SingleProductComponent } from './shop/single-product/single-product.component';
import { CartComponent } from './shop/cart/cart.component';
import {  NotFoundComponent } from './shop/not-found/not-found.component';


import { Routes, RouterModule } from '@angular/router';
import { QuickViewModalComponent } from './shop/quick-view-modal/quick-view-modal.component';
import { AddToCartModalComponent } from './shop/add-to-cart-modal/add-to-cart-modal.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'cart', component: CartComponent },
  { path: 'home', component: HomeComponent },
  { path: 'single-product/:id', component: SingleProductComponent }, // cette route nous permet d'afficher un produit, elle prend comme params l'id du produit
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'notfound', component: NotFoundComponent },
  { path: '', component: ShopComponent },
  { path: '**', redirectTo: 'notFound', pathMatch: 'full' }

]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ShopComponent,
    ProductsComponent,
    SingleProductComponent,
    CartComponent,
    QuickViewModalComponent,
    AddToCartModalComponent,
    CarousselComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
