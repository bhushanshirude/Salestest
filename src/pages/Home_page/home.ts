import { Component } from '@angular/core';
import { NavController, App, PopoverController } from 'ionic-angular';
import { AccountPage } from '../Account/account';
import { UploadTabsPage } from '../upload-tabs/upload-tabs';
import { VideoDetailsPage } from '../Video_details_page/video-details';
import { SearchPage } from '../Search_page/search';
import { PopoverPage } from '../popover_page/popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  // myNavbarColor: string;
  // public plt: Platform
  display;
  constructor(public navCtrl: NavController, public appCtrl: App, public popoverCtrl: PopoverController) {
    // if (this.plt.is('ios')) {
    //   // This will only print when on iOS
    //   console.log('I am an iOS device!');
    //   this.myNavbarColor = "#32db64"
    // }
    // else if (this.plt.is('android')) {
    //   console.log('I am an Android device!');
    //   this.myNavbarColor = "#e83338"
    // }
    // else if (this.plt.is('windows')) {
    //   console.log('I am an windows device!');
    //   this.myNavbarColor = "#FFFFFF"
    // }
  }

  account() {
    this.appCtrl.getRootNavs()[0].push(AccountPage);
  }

  video() {
    this.appCtrl.getRootNavs()[0].push(UploadTabsPage);
  }

  search() {
    this.navCtrl.push(SearchPage);
  }

  seen() {
    this.appCtrl.getRootNavs()[0].push(VideoDetailsPage);
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
}
