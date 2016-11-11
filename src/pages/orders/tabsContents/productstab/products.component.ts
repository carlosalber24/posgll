import {Component} from '@angular/core';
import {NavController, AlertController, MenuController} from 'ionic-angular';
import {LoginPage} from '../../../login/login';
import {OrdersPage} from '../../../orders/orders';

@Component({
  selector: 'products-content',
  templateUrl: 'products.html'
})
export class ProductsContent {
  public products = { product: 'producto 1'};
  public tipo = 'hoy';
  
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
