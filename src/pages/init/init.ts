import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LoginPage} from '../login/login';

@Component({
  selector: 'page-init',
  templateUrl: 'init.html'
})
export class InitPage {
  constructor(
    public nav: NavController
    ) {
      this.redirectToLogin();
  }

  /*
  * Method to redirect to Login Page
  */
  redirectToLogin(): void{
    setTimeout(() =>{
       this.nav.setRoot(LoginPage);
    }, 3000)
  }
}
