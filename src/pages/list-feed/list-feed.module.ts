import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListFeedPage } from './list-feed';

@NgModule({
  declarations: [
    ListFeedPage,
  ],
  imports: [
    IonicPageModule.forChild(ListFeedPage),
  ],
})
export class ListFeedPageModule {}
