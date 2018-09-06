import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetSolicitacaoPage } from './det-solicitacao';

@NgModule({
  declarations: [
    DetSolicitacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetSolicitacaoPage),
  ],
})
export class DetSolicitacaoPageModule {}
