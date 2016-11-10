import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {SalesPage} from '../../pages/sales/sales';
import {ClientsService} from '../../services/clients-service';

@Component({
  selector: 'page-clients',
  templateUrl: 'clients.html',
  providers: [ClientsService]
})

export class ClientsPage {

  public clientsData: Array<any>;
  public searchName: String = '';

  constructor(
  public nav: NavController, 
  public clients: ClientsService,
  public alertCtrl: AlertController
  ) {
    this.getClients();
  }
  
  /*
  * Method to come back to profile page
  */
  goBackToProfile() {
	  this.nav.setRoot(SalesPage);
  }

  /*
  * Method to call get clients service
  */
  getClients(){
    this.clients.getClients().then( data =>{
      this.clientsData = data;
    })
  }
  
  /*
  * Method to add new client from a promp message
  */
  addClient() {
    let prompt = this.alertCtrl.create({
      title: 'Agregar Cliente',
      message: "Por favor llene todos los campos para registrar un nuevo cliente.",
      inputs: [
        {
          name: 'Email',
          placeholder: 'Email'
        },
        {
          name: 'Nombre',
          placeholder: 'Nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            this.saveClient(data);
          }
        }
      ]
    });
    prompt.present();
  }
  
  /*
  * Method to call save client endpoint
  * params {Object} data
  */
  saveClient(data){
    if(data.Email != "" && data.Name != ""){
      this.clients.saveClient(data).then(data =>{
       console.log(data)
      this.showConfirm('!Hecho!', 'El cliente se registro satisfactoriamente');
     })
    }else{
      this.showConfirm('Error', 'Por favor debe llenar todos los campos para guardar un cliente');
    }
  }

   /*
   * Method to call save client endpoint
   * params {String} title
   * params {String} message
   */
  showConfirm(title, message){
    let alert = this.alertCtrl.create({
        title: title,
        subTitle: message,
        buttons: ['OK']
      });
    alert.present()
  }

  /*
   * Method to save clients selected in a service
   * params {Object} selectedClient
   */
  selectedClient(selectedClient){
    this.clients.setSelectedClients(selectedClient);
  }

}
