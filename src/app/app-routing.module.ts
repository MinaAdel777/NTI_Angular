import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenShopComponent } from './men-shop/men-shop.component';
import { WomenShopComponent } from './women-shop/women-shop.component';
import { KidsShopComponent } from './kids-shop/kids-shop.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { authGuard } from './guards.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  // { this is the same
  //   path:'',component:HomeComponent
  // }
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Shop - Home' },
  },

  {
    path: 'menshop',
    component: MenShopComponent,
    data: { title: '.Shop - Men' },
  },
  {
    path: 'womenshop',
    component: WomenShopComponent,
    data: { title: 'Shop - Women' },
  },
  {
    path: 'kidsshop',
    component: KidsShopComponent,
    data: { title: 'Shop - Kids' },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Shop - Contact' },
  },
  {
    path: 'aboutus',
    component: AboutComponent,
    data: { title: 'Shop - AboutUs' },
  },
  { path: 'cart', component: CartComponent, data: { title: '.Shop - Cart' } },

  {
    path: 'productdetails/:id',
    component: SingleProductComponent,
    data: { title: 'Shop - details' },
  },

  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Shop - Login' },
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: { title: 'Shop - Signup' },
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    data: { title: 'Shop - Dashboard' },
  },

  {
    path: '**', // this should be last one
    component: NotFoundComponent,
  },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
