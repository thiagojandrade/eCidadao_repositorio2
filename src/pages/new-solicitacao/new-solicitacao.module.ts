import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewSolicitacaoPage } from './new-solicitacao';

@NgModule({
  declarations: [
    NewSolicitacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(NewSolicitacaoPage),
  ],
})
export class NewSolicitacaoPageModule {}
