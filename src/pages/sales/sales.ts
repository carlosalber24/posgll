import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ProfilePage} from '../../pages/profile/profile';
import {ClientsPage} from '../../pages/clients/clients';

@Component({
  selector: 'page-sales',
  templateUrl: 'sales.html',
})
export class SalesPage {

  public salesData = {};

  constructor(public nav: NavController) {}

  goToProfile(){
    this.nav.setRoot(ProfilePage);
  }

  goToClients(){
     this.nav.setRoot(ClientsPage);
  }
}
