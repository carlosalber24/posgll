import {Component} from '@angular/core';
import {Validators, FormBuilder } from '@angular/forms';
import {NavController, LoadingController, AlertController, MenuController} from 'ionic-angular';
import {WelcomePage} from '../welcome/welcome';
import {RegisterPage} from '../register/register';
import {AuthService} from "../../services/auth-service";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AuthService]
})
export class LoginPage {
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
        username: ['', Validators.required],
        password: ['', Validators.required]
      });

      this.menuCtrl.enable(false);
  }

  login() {
    let loadingPopup = this.createLoader();
    loadingPopup.present();
      setTimeout(() => {
        this.closeLoading(loadingPopup);
        this.nav.setRoot(WelcomePage);
      }, 1000)
  }

  goToRegister(){
    this.nav.setRoot(RegisterPage);
  }

  goToWelcome(){
    this.nav.setRoot(WelcomePage);
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
