import {Component} from '@angular/core';
import {Validators, FormBuilder } from '@angular/forms';
import {NavController, LoadingController, AlertController, MenuController} from 'ionic-angular';
import {ProfilePage} from '../profile/profile';
import {LoginPage} from '../login/login';
import {AuthService} from "../../services/auth-service";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [AuthService]
})
export class RegisterPage {
  public authForm:any;
  public submitted = false;

  constructor(
    public nav: NavController, 
    public auth: AuthService, 
    private loadingCtrl: LoadingController, 
    private formBuilder: FormBuilder, 
    private alertCtrl: AlertController,
    private menuCtrl: MenuController
    ) {
    this.authForm = this.formBuilder.group({
        name: ['', Validators.required],
        username: ['', Validators.required],
        email: ['', Validators.required],
        paises: ['', Validators.required],
        password: ['', Validators.required],
        confirm: ['', Validators.required],
        dia: ['', Validators.required],
        mes: ['', Validators.required],
        año: ['', Validators.required]
      });

      this.menuCtrl.enable(false);
  }

  login() {
    let loadingPopup = this.createLoader();
    loadingPopup.present();
    this.auth.login(this.authForm.value).then( data => {
      if(data){
        setTimeout(() => {
          this.closeLoading(loadingPopup);
          this.nav.setRoot(ProfilePage);
        }, 1000)
      }
      else{
       this.closeLoading(loadingPopup);
       let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Ingrese una credencial válida',
          buttons: ['Cerrar']
        });
        alert.present();
      }
    });
  }

  goToLogin(){
    this.nav.setRoot(LoginPage);
  }

  // Create a loader
  createLoader() {
    return this.loadingCtrl.create({
      content: 'Por favor espere...'
    });
  }

  // Close Loading
  closeLoading(loadingPopup): void{
    loadingPopup.dismiss();
  }

}
