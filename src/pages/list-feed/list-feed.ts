import { FeedPage } from './../feed/feed';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list-feed',
  templateUrl: 'list-feed.html',
})
export class ListFeedPage {

  items;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }
  initializeItems() {
    this.items = [
      'Centro',
      'Jd Polivalente',
      'Jd Polivalente',
      'Muarama',
      'Penha',
      'Penha',
      'Santa Luzia'
    ];
  }
  detFeed(){
    this.navCtrl.push(FeedPage);
  }
  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
