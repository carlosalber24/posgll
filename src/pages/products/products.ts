import {Component} from '@angular/core';
import {NavController, AlertController, NavParams, ToastController} from 'ionic-angular';
import {SalesPage} from '../../pages/sales/sales';
import {ProductsService} from '../../services/products-service';

@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
  providers: [ProductsService]
})

export class ProductsPage {

  public allProducts = { hoy: [], bodega: [] };
  public products = [];
  public searchName: String = '';
  public modelProduct = { hoy: [], bodega: [] };
  public dataProducts = { Tamano: 9, Cajas: '', Precio: '', Product: 'Seleccione', ProductosSelected: [], Nombre: '', ID: '', Email: '' };
  public tipo: string;

  constructor(
  public nav: NavController, 
  public clients: ProductsService,
  public alertCtrl: AlertController,
  public toastCtrl: ToastController,
  public navParams: NavParams
  ) {
    this.clients.getProducts().subscribe( data => { 
      this.products = data.json();
      this.refactorProducts(data.json());
      this.refactorClients();
      (this.allProducts.hoy.length > 0) ? this.tipo = 'hoy' : this.tipo = 'bodega';
    });
  }
  
  /*
  * Method to come back to profile page
  */
  goBackToSales() {
	  this.nav.setRoot(SalesPage, this.dataProducts);
  }
  
  /*
  * Method to group by Bodega and Hoy
  * params {Array<object>} dataProducts
  */
  refactorProducts(dataProducts) {
    let i = 0;
    let j = 0;

    for (let product of dataProducts) {
      if(!product.Bodega){
        this.allProducts.hoy.push(product);
        this.modelProduct.hoy[i] = false;
        i = i + 1;
      }else{
        this.allProducts.bodega.push(product);
        this.modelProduct.bodega[j] = false;
        j = j + 1;
      }
    }
  }
 
  /*
   * Method to refactor data cliente to send it back to sales
   */
  refactorClients(){
    this.dataProducts.Nombre = this.navParams.get('name');
    this.dataProducts.ID = this.navParams.get('id');
    this.dataProducts.Email = this.navParams.get('email');
  }

  /*
   * Method to toggle add a selected product to obj
   * params {Object} objProduct
   */
  setSelected(objProduct){
    this.dataProducts.ProductosSelected.push(objProduct);
    let toast = this.toastCtrl.create({
        message: 'Se ha agregado un producto para la orden de compra',
        duration: 4000
      });
      toast.present();
  }

  /*
   * Method to toggle selected product
   * params {Number} i
   * params {String} type
   */
  toggleSelected(i, type, item){
    this.setSelected(item);

    if(type === 'hoy')
      this.modelProduct.hoy[i] = !this.modelProduct.hoy[i];
    else
      this.modelProduct.bodega[i] = !this.modelProduct.bodega[i];
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
    console.log(selectedClient)
    this.nav.setRoot(SalesPage, selectedClient);
  }

}
