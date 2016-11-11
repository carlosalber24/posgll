import {Component} from '@angular/core';
import {NavController, AlertController, ToastController} from 'ionic-angular';
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
  public dataToSend;

  constructor(
  public nav: NavController, 
  public clients: ClientsService,
  public alertCtrl: AlertController,
  public toastCtrl: ToastController
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
    this.clients.getClients().subscribe( data => {
      this.clientsData = data.json();
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
    if(data.Email != "" && data.Nombre != ""){
      this.dataToSend = 'Apellido=algo&CreditoActual=0&CreditoMax=0&CreditoMin=0&DireccinOficina=465456&Email='+data.Email+'&EmailOficina=algo&Enable=true&Nombre='+data.Nombre+'&PersonaMoral=false&Telefono=12244&TelefonoOficina=ads&Password=1234'; 
      this.clients.saveClient(this.dataToSend).subscribe( data => { 
       this.clientsData.push(data.json());
       this.showConfirm('!Hecho!', 'El cliente se registró satisfactoriamente');
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
    this.nav.setRoot(SalesPage, selectedClient);
     let toast = this.toastCtrl.create({
        message: 'Se ha agregado un cliente a la orden de compra',
        duration: 4000
      });
      toast.present();
  }
}
