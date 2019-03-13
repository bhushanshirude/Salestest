import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { AccountPage } from '../Account/account';
import { UploadTabsPage } from '../upload-tabs/upload-tabs';
import { VideoDetailsPage } from '../Video_details_page/video-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  constructor(public navCtrl: NavController, public appCtrl: App) { }

  account() {
    this.appCtrl.getRootNavs()[0].push(AccountPage);
  }

  video() {
    this.appCtrl.getRootNavs()[0].push(UploadTabsPage);
  }

  seen() {
      this.appCtrl.getRootNavs()[0].push(VideoDetailsPage);
  }
  
}
