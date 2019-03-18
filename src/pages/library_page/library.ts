import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { AccountPage } from '../Account/account';
import { HistoryPage } from '../History_page/history';
import { WatchLaterPage } from '../Watch_later_page/watch-later';
import { VideoDetailsPage } from '../Video_details_page/video-details';
import { UploadTabsPage } from '../upload-tabs/upload-tabs';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {

  constructor(public navCtrl: NavController, public appCtrl: App, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }

  account() {
    this.appCtrl.getRootNavs()[0].push(AccountPage);
  }

  history() {
    this.appCtrl.getRootNavs()[0].push(HistoryPage);
  }

  Watch() {
    this.appCtrl.getRootNavs()[0].push(WatchLaterPage);
  }
  seen() {
    this.appCtrl.getRootNavs()[0].push(VideoDetailsPage);
  }

  video() {
    this.appCtrl.getRootNavs()[0].push(UploadTabsPage);
  }

}
