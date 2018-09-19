import { NewSolicitacaoPage } from './../new-solicitacao/new-solicitacao';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


@IonicPage()
@Component({
  selector: 'page-list-categorias',
  templateUrl: 'list-categorias.html',
})
export class ListCategoriasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListCategoriasPage');
  }
  newSolicitacao() {
    let alert = this.alertCtrl.create({
      title: 'DESENVOLVIMENTO',
      message: 'Essa pagina esta em desenvolvimento',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.push(NewSolicitacaoPage);
  }

}
