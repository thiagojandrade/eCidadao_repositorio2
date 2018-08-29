import { AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  backLogin(){
    this.navCtrl.setRoot('LoginPage');
  }
  development(){
    let alert = this.alertCtrl.create({
      title: 'DESENVOLVIMENTO',
      message: 'Essa pagina esta em desenvolvimento',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.setRoot('HomePage');
  }
  solicitacoes(){
    this.navCtrl.push('SolicitacoesPage');
  }
}
