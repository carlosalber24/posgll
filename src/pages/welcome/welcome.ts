import {Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';
import {LoginPage} from '../login/login';
import {OrdersPage} from '../orders/orders';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  public submitted = false;
  constructor(
    public nav: NavController,
    private menuCtrl: MenuController
    ) {
      this.menuCtrl.enable(false);
  }

  goToLogin(){
    this.nav.setRoot(LoginPage);
  }

  goToOrders(){
    this.nav.setRoot(OrdersPage);
  }

}
