import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthGuard } from './services/auth.guard';
import { HttpClientModule } from '@angular/common/http'
import { NgxPayPalModule } from 'ngx-paypal';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarousselComponent } from './caroussel/caroussel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { ButtonPaypalComponent } from './shop/button-paypal/button-paypal.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'cart', component: CartComponent },
  { path: 'home', component: HomeComponent },
  { path: 'single-product/:id', component: SingleProductComponent }, // cette route nous permet d'afficher un produit, elle prend comme params l'id du produit
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'checkout',canActivate: [AuthGuard], component: CheckoutComponent},
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
    CarousselComponent,
    CheckoutComponent,
    ButtonPaypalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPayPalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
