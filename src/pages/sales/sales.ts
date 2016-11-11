import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ProfilePage} from '../../pages/profile/profile';
import {ClientsPage} from '../../pages/clients/clients';
import {ProductsPage} from '../../pages/products/products';

@Component({
  selector: 'page-sales',
  templateUrl: 'sales.html',
})
export class SalesPage {

  public salesData = {};
  private clientData = { name: '', id: '', email: ''};

  constructor(
    public nav: NavController,
    private navParams: NavParams
    ) {
      this.clientData.name = navParams.get('Nombre');
      this.clientData.id = navParams.get('ID');
      this.clientData.email = navParams.get('Email');
    }

  goToProfile(){
    this.nav.setRoot(ProfilePage);
  }

  goToClients(){
     this.nav.setRoot(ClientsPage);
  }

  goToProducts(){
     this.nav.setRoot(ProductsPage, this.clientData);
  }
}
