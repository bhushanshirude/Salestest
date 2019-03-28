import { Component } from '@angular/core';
import { NavController, App, PopoverController } from 'ionic-angular';
import { AccountPage } from '../Account/account';
import { UploadTabsPage } from '../upload-tabs/upload-tabs';
import { VideoDetailsPage } from '../Video_details_page/video-details';
import { SearchPage } from '../Search_page/search';
import { PopoverPage } from '../popover_page/popover';
import { ServiceProvider } from '../../providers/service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  // myNavbarColor: string;
  // public plt: Platform
  display;
  Api_url;
  constructor(public navCtrl: NavController, public servie: ServiceProvider, public appCtrl: App, public popoverCtrl: PopoverController) {
    this.Api_url = servie.user_api;
    this.get_video();
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
  get_video() {
    fetch(this.Api_url + 'home', {
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

  video() {
    this.appCtrl.getRootNavs()[0].push(UploadTabsPage);
  }

  search() {
    this.navCtrl.push(SearchPage);
  }

  seen() {
    fetch(this.Api_url + 'single_video', {
      method: 'POST',
      body: JSON.stringify({
        "video_tape_id": "1",
        "exists": "1"
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => response.json()).then(data => {
      this.appCtrl.getRootNavs()[0].push(VideoDetailsPage);
      console.log("data1", data)
      // if (data.Object.success == true) {
      //   for (let i = 0; i <= data.Object.data; i++) {
      //   }
      // } else if (data.Object.success == false) {

      // }
    })
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
}
