import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';
import { VideoDetailsPage } from '../Video_details_page/video-details';
import { ServiceProvider } from '../../providers/service';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  Api_url;
  constructor(public navCtrl: NavController, public servie: ServiceProvider, public navParams: NavParams, public appCtrl: App) {
    this.Api_url = servie.user_api;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }
  seen() {
    this.appCtrl.getRootNavs()[0].push(VideoDetailsPage);
  }

  privacy() {
    fetch(this.Api_url + 'privacy', {
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

  about() {
    fetch(this.Api_url + 'about', {
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

  terms() {
    fetch(this.Api_url + 'terms', {
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

  help() {
    fetch(this.Api_url + 'help', {
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
}
