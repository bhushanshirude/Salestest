import { Component } from '@angular/core';
import { NavController, NavParams, App, PopoverController } from 'ionic-angular';
@Component({
  selector: 'page-subscription',
  templateUrl: 'subscription.html',
})
export class SubscriptionPage {

  constructor(public navCtrl: NavController, public appCtrl: App, public popoverCtrl: PopoverController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubscriptionPage');
  }
}
