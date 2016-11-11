import {Component} from '@angular/core';
import {NavController, AlertController, MenuController} from 'ionic-angular';
import {LoginPage} from '../login/login';
import {WelcomePage} from '../welcome/welcome';
import {OrdersContent} from './tabsContents/orderstab/orders.component';
import {NewContent} from './tabsContents/newtab/new.component';
import {ProductsContent} from './tabsContents/productstab/products.component';
import {SettingsContent} from './tabsContents/settingstab/settings.component';

@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html'
})
export class OrdersPage {
  public rootPage;
  
  constructor(
    public nav: NavController, 
    private alertCtrl: AlertController,
    private menuCtrl: MenuController
    ) {
      this.rootPage = {
        'orders': OrdersContent,
        'new': NewContent,
        'products': ProductsContent,
        'settings': SettingsContent
      }
      
      //this.menuCtrl.enable(false);
  }

  goToLogin(){
    this.nav.setRoot(LoginPage);
  }

  goBackToWelcome(){
    this.nav.setRoot(WelcomePage);
  }

  changeTitle(title){
    console.log(title)
  }
}
