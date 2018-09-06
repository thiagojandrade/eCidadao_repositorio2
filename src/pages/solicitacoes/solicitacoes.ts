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
  detalhes(){
    this.navCtrl.push(DetSolicitacaoPage);
  }

}
