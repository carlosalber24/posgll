import {Component} from '@angular/core';
import {NavController, AlertController, MenuController} from 'ionic-angular';
import {LoginPage} from '../../../login/login';
import {WelcomePage} from '../../../welcome/welcome';

@Component({
  selector: 'orders-content',
  templateUrl: 'orders.content.html'
})
export class OrdersContent {
  
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

  goBackToWelcome(){
    this.nav.setRoot(WelcomePage);
  }

  // Close Loading
  closeLoading(loadingPopup): void{
    loadingPopup.dismiss();
  }

}
