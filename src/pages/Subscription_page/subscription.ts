import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { AccountPage } from '../Account/account';
import { VideoDetailsPage } from '../Video_details_page/video-details';

@Component({
  selector: 'page-subscription',
  templateUrl: 'subscription.html',
})
export class SubscriptionPage {

  constructor(public navCtrl: NavController, public appCtrl: App, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubscriptionPage');
  }

  account() {
    this.appCtrl.getRootNavs()[0].push(AccountPage);
  }

  seen() {
    this.appCtrl.getRootNavs()[0].push(VideoDetailsPage);
  }
}
