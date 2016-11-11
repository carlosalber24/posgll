import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { BazaarApp } from './app.component';
import {LoginPage} from '../pages/login/login';
import {ProfilePage} from '../pages/profile/profile';
import {HomePage} from '../pages/home/home';
import {ProductlPage} from '../pages/productl/productl';
import {ProductdPage} from '../pages/productd/productd';
import {CartPage} from '../pages/cart/cart';
import {CheckoutPage} from '../pages/checkout/checkout';
import {SalesPage} from '../pages/sales/sales';
import {ClientsPage} from '../pages/clients/clients';
import {ProductsPage} from '../pages/products/products';
import {FilterArrayPipe} from '../pipes/pipe-filter';

@NgModule({
  declarations: [
    BazaarApp,
    HomePage, LoginPage, ProfilePage,
    ProductlPage, ProductdPage,
    CartPage, CheckoutPage, SalesPage,
    ClientsPage, FilterArrayPipe, ProductsPage
  ],
  imports: [
    IonicModule.forRoot(BazaarApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    BazaarApp,
    HomePage, LoginPage, ProfilePage,
    ProductlPage, ProductdPage,
    CartPage, CheckoutPage, SalesPage,
    ClientsPage, ProductsPage
  ],
  providers: []

})
export class AppModule {}
