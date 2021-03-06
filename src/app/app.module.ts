import { ListCategoriasPage } from './../pages/list-categorias/list-categorias';
import { DetSolicitacaoPage } from './../pages/det-solicitacao/det-solicitacao';
import { FeedPage } from './../pages/feed/feed';
import { SignupPage } from './../pages/auth/signup/signup';
import { HomePage } from './../pages/home/home';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/auth/login/login';
import { SolicitacoesPage } from '../pages/solicitacoes/solicitacoes';
import { PerfilPage } from '../pages/perfil/perfil';
import { NewSolicitacaoPage } from '../pages/new-solicitacao/new-solicitacao';
import { ListFeedPage } from '../pages/list-feed/list-feed';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    SolicitacoesPage,
    FeedPage,
    PerfilPage,
    DetSolicitacaoPage,
    NewSolicitacaoPage,
    ListCategoriasPage,
    ListFeedPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    SolicitacoesPage,
    FeedPage,
    PerfilPage,
    DetSolicitacaoPage,
    NewSolicitacaoPage,
    ListCategoriasPage,
    ListFeedPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
