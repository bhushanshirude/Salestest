import { Component } from '@angular/core';
import { NavController, NavParams, App, PopoverController } from 'ionic-angular';
import { AccountPage } from '../Account/account';
import { VideoDetailsPage } from '../Video_details_page/video-details';
import { UploadTabsPage } from '../upload-tabs/upload-tabs';
import { SearchPage } from '../Search_page/search';
import { PopoverPage } from '../popover_page/popover';

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

  account() {
    this.appCtrl.getRootNavs()[0].push(AccountPage);
  }

  seen() {
    this.appCtrl.getRootNavs()[0].push(VideoDetailsPage);
  }

  video() {
    this.appCtrl.getRootNavs()[0].push(UploadTabsPage);
  }

  search() {
    this.navCtrl.push(SearchPage);
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
}
