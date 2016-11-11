import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";

@Injectable()
export class ClientsService {
  
  private baseUrl: String = 'http://grupollaneros.azurewebsites.net';
  public headers: any;

  constructor(public http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
  }

  /*
  * Méthod to get clients or vendors
  *
  */
  getClients(){
    return new Promise<any> ( resolve => { 
      this.http.get(`${this.baseUrl}/services/v2/clientes`, {headers: this.headers})
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
    return new Promise<any> ( resolve => { 
      this.http.post(`${this.baseUrl}/services/v2/clientes`, userData, {headers: this.headers})
      .subscribe( data => {
        let response =  data.json();
        resolve(response);
      });
    })
  }
}
