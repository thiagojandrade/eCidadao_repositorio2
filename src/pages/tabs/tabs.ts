import { FeedPage } from './../feed/feed';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';

import { SolicitacoesPage } from '../solicitacoes/solicitacoes';
import { PerfilPage } from '../perfil/perfil';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SolicitacoesPage;
  tab3Root = FeedPage;
  tab4Root = PerfilPage;

  constructor() {

  }
}