import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";

@Injectable()
export class AuthService {
  
  public isLoggedIn: boolean;
  public authToken: any;
  private baseUrl: String = 'http://grupollaneros.azurewebsites.net';

  static get parameters(){
    return [Http];
  }

  constructor(public http: Http) {
    this.isLoggedIn = false;
    this.authToken  = null;
  }

  storeUserCredentials(token){
    window.localStorage.setItem('token', token);
    this.userCredentials(token);
  }

  loadUserCredentials(){
    var token = window.localStorage.getItem('token');
    this.userCredentials(token);
  }

  destroyUserCredentials(){
    this.isLoggedIn = false;
    this.authToken  = null;
     window.localStorage.clear();
  }
  
  /*
  * Méthod to Log in
  *
  * params {Object} userData
  */
  login (userData){

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return new Promise ( resolve => { 
      this.http.post(`${this.baseUrl}/services/usuarios/login`, userData, {headers: headers})
      .subscribe( data => { 
        let response =  data.json();
        console.log(response)
        if(response.length > 0){
            for (let data of response) {
               if(data.Email === userData.username && data.Activo)
                resolve(true);
               else
                resolve(false);
            }
        }else{
            resolve(false);
        }
      });
    })
  }

  /*
  * Méthod to SignUp
  *
  * params {Object} userData
  */
  signUp (userData){

    console.log(userData);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return new Promise ( resolve => { 
      this.http.post(`${this.baseUrl}/services/usuarios`, userData, {headers: headers})
      .subscribe( data => {
        let response =  data.json();
        console.log(response);
      });
    })
  }


  userCredentials(token){
    this.isLoggedIn = true;
    this.authToken  = token;
  }
  
}
