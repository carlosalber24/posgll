import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";

@Injectable()
export class ClientsService {
  
  private baseUrl: String = 'http://grupollaneros.azurewebsites.net';
  public clients: Array<any> = [];

  constructor(public http: Http) {
  }

  /*
  * Méthod to get clients or vendors
  *
  */
  getClients(){

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return new Promise<any> ( resolve => { 
      this.http.get(`${this.baseUrl}/services/v2/clientes`, {headers: headers})
      .subscribe( data => { 
        let response =  data.json();
        resolve(response);
      });
    })
  }

  /*
  * Méthod to save clients
  *
  */
  saveClient(userData){

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return new Promise<any> ( resolve => { 
      this.http.post(`${this.baseUrl}/services/v2/clientes`, userData, {headers: headers})
      .subscribe( data => {
        let response =  data.json();
        console.log(response);
      });
    })
  }

  /*
  * Méthod to get selected clients
  *
  */
  getSelectedClients(){
    return this.clients;
  }

  /*
  * Méthod to set selected clients
  *
  */
  setSelectedClients(dataClients){
    this.clients.push(dataClients);
  }
  
}
