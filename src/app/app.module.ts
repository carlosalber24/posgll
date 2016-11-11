import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { BazaarApp } from './app.component';
import {InitPage} from '../pages/init/init';
import {LoginPage} from '../pages/login/login';
import {RegisterPage} from '../pages/register/register';
import {WelcomePage} from '../pages/welcome/welcome';
import {OrdersPage} from '../pages/orders/orders';
import {OrdersContent} from '../pages/orders/tabsContents/orderstab/orders.component';
import {NewContent} from '../pages/orders/tabsContents/newtab/new.component';
import {SettingsContent} from '../pages/orders/tabsContents/settingstab/settings.component';
import {ProductsContent} from '../pages/orders/tabsContents/productstab/products.component';
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
    HomePage, InitPage, LoginPage, RegisterPage, WelcomePage, 
    OrdersPage, NewContent, SettingsContent, ProductsContent, 
    OrdersContent, ProfilePage, ProductlPage, ProductdPage,
    CartPage, CheckoutPage, SalesPage,
    ClientsPage, FilterArrayPipe, ProductsPage
  ],
  imports: [
    IonicModule.forRoot(BazaarApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    BazaarApp,
    HomePage, InitPage, LoginPage, RegisterPage, WelcomePage, 
    OrdersPage, NewContent, ProductsContent, SettingsContent, 
    OrdersContent, ProfilePage, ProductlPage, ProductdPage,
    CartPage, CheckoutPage, SalesPage,
    ClientsPage, ProductsPage
  ],
  providers: []

})
export class AppModule {}
