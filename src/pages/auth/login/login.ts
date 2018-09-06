import { SignupPage } from './../signup/signup';
import { TabsPage } from './../../tabs/tabs';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginForm: any;
  constructor(public formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20), Validators.required])]
    })    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  goToSignUp(){
    this.navCtrl.push(SignupPage);
  }
  efetuarlogin(){
    this.navCtrl.setRoot(TabsPage);
  }

}
