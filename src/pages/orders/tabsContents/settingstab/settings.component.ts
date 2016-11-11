import {Component} from '@angular/core';
import {NavController, AlertController, MenuController} from 'ionic-angular';
import {LoginPage} from '../../../login/login';
import {OrdersPage} from '../../../orders/orders';

@Component({
  selector: 'settings-content',
  templateUrl: 'settings.html'
})
export class SettingsContent {
  
  constructor(
    public nav: NavController, 
    private alertCtrl: AlertController,
    private menuCtrl: MenuController
    ) {

      //this.menuCtrl.enable(false);
  }

  goToLogin(){
    this.nav.setRoot(LoginPage);
  }

  goBackToOrders(){
    this.nav.setRoot(OrdersPage);
  }
}
