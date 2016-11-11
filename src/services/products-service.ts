import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";

@Injectable()
export class ProductsService {
  
  private baseUrl: String = 'http://grupollaneros.azurewebsites.net';
  public headers: any;

  constructor(public http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
  }

  /*
  * Méthod to get productos from inventory
  *
  */
  getProducts(){
    return this.http.get(`${this.baseUrl}/services/v2/inventory`, {headers: this.headers});
  }
}
