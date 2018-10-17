import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { DetSolicitacaoPage } from '../det-solicitacao/det-solicitacao';

@Component({
  selector: 'page-solicitacoes',
  templateUrl: 'solicitacoes.html',
})
export class SolicitacoesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  detalhes(){
    this.navCtrl.push(DetSolicitacaoPage);
  }

}
