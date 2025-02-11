import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MenShopComponent } from './men-shop/men-shop.component';
import { WomenShopComponent } from './women-shop/women-shop.component';
import { KidsShopComponent } from './kids-shop/kids-shop.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NewLetterComponent } from './parts/new-letter/new-letter.component';
import { SmBannerComponent } from './parts/sm-banner/sm-banner.component';
import { ProductsComponent } from './parts/products/products.component';
import { BannerComponent } from './parts/banner/banner.component';
import { FeaturesComponent } from './parts/features/features.component';
import { TopBodyComponent } from './parts/top-body/top-body.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaginationComponent } from './parts/pagination/pagination.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddproductComponent } from './dashboard/addproduct/addproduct.component';
import { AddusertypeComponent } from './dashboard/addusertype/addusertype.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CartComponent,
    AboutComponent,
    ContactComponent,
    MenShopComponent,
    WomenShopComponent,
    KidsShopComponent,
    SingleProductComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    NewLetterComponent,
    SmBannerComponent,
    ProductsComponent,
    BannerComponent,
    FeaturesComponent,
    TopBodyComponent,
    NotFoundComponent,
    PaginationComponent,
    AddproductComponent,
    AddusertypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
