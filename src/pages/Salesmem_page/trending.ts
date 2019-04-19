import { Component } from '@angular/core';
import { NavController, NavParams, App, PopoverController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service';


@Component({
  selector: 'page-trending',
  templateUrl: 'trending.html',
})
export class TrendingPage {
  Api_url;
  constructor(public navCtrl: NavController, public servie: ServiceProvider, public appCtrl: App, public popoverCtrl: PopoverController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrendingPage');
  }
}
