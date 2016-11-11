import {Component, ViewChild} from '@angular/core';
import {Platform, Nav, MenuController} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';
import {InitPage} from '../pages/init/init';
import {LoginPage} from '../pages/login/login';
import {RegisterPage} from '../pages/register/register';
import {WelcomePage} from '../pages/welcome/welcome';
import {OrdersPage} from '../pages/orders/orders';
import {ProfilePage} from '../pages/profile/profile';
import {HomePage} from '../pages/home/home';
import {ProductlPage} from '../pages/productl/productl';
import {ProductdPage} from '../pages/productd/productd';
import {CartPage} from '../pages/cart/cart';
import {CheckoutPage} from '../pages/checkout/checkout';
import {SalesPage} from '../pages/sales/sales';
import {ClientsPage} from '../pages/clients/clients';
import {ProductsPage} from '../pages/products/products';

interface PageObj {
  title: string;
  component: any;
  index?: number;
}

@Component({
  templateUrl: 'app.html'
})
export class BazaarApp {
  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  // List of pages that can be navigated to from the left menu
  // the left menu only works after login
  // the login page disables the left menu
  appPages: PageObj[] = [
    { title: 'Account', component: ''},
    { title: 'Reproduction', component: ''},
    { title: 'Notifications', component: ''},
    { title: 'Social', component: ''},
    { title: 'About', component: ''}
  ];
  
  rootPage: any = InitPage;
  constructor(
    public menu: MenuController,
    platform: Platform

  ) {
    // Call any initial plugins when ready
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

  }

  openPage(page: PageObj) {
	  this.nav.setRoot(page.component);
  }

}
