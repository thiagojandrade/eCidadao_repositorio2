import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {

  signupForm: any;

  constructor(public formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams,
     public alertCtrl: AlertController) {
    this.signupForm = formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      cep: ['', Validators.compose([Validators.maxLength(8), Validators.required])],
      endereco: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20), Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20), Validators.required])]
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  salvarCadastro(){
    let alert = this.alertCtrl.create({
      title: 'Cadastro realizado',
      message: 'Seu cadastro foi realizado com sucesso',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.setRoot('LoginPage');
  }
  
  addEndereco(){
    
  }

}
