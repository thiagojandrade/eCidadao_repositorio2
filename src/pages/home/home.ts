import { LoginPage } from './../auth/login/login';
import { AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { NewSolicitacaoPage } from '../new-solicitacao/new-solicitacao';
import { ListCategoriasPage } from '../list-categorias/list-categorias';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  newSolicitacao(){
    let alert = this.alertCtrl.create({
      title: 'DESENVOLVIMENTO',
      message: 'Essa pagina esta em desenvolvimento',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.push(NewSolicitacaoPage);
  }
  outras(){
    this.navCtrl.push(ListCategoriasPage);
  }
}
