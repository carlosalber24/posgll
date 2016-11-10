import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CartPage} from '../../pages/cart/cart';
import {LoginPage} from '../../pages/login/login';
import {SalesPage} from '../../pages/sales/sales';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public nav: NavController) {}
  goToCart() {
	  this.nav.setRoot(CartPage);
  }

  logOut(){
    this.nav.setRoot(LoginPage);
  }

  goSales(){
    this.nav.setRoot(SalesPage);
  }
}
