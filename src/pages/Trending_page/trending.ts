import { Component } from '@angular/core';
import { NavController, NavParams, App, PopoverController } from 'ionic-angular';
import { AccountPage } from '../Account/account';
import { VideoDetailsPage } from '../Video_details_page/video-details';
import { UploadTabsPage } from '../upload-tabs/upload-tabs';
import { SearchPage } from '../Search_page/search';
import { PopoverPage } from '../popover_page/popover';
import { ServiceProvider } from '../../providers/service';


@Component({
  selector: 'page-trending',
  templateUrl: 'trending.html',
})
export class TrendingPage {
  Api_url;
  constructor(public navCtrl: NavController, public servie: ServiceProvider, public appCtrl: App, public popoverCtrl: PopoverController, public navParams: NavParams) {
    this.Api_url = servie.user_api;
    this.get_video();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrendingPage');
  }

  get_video() {
    fetch(this.Api_url + 'trending', {
      method: 'POST',
      body: JSON.stringify({

      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => response.json()).then(data => {
      console.log("data1", data)
      // if (data.Object.success == true) {
      //   for (let i = 0; i <= data.Object.data; i++) {
      //   }
      // } else if (data.Object.success == false) {

      // }
    })
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
