import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  Api_url;
  constructor(public navCtrl: NavController, public servie: ServiceProvider, public navParams: NavParams) {
    this.Api_url = servie.user_api;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  getItems(ev: any) {
    const val = ev.target.value;
    fetch(this.Api_url + 'home', {
      method: 'POST',
      body: JSON.stringify({
        "key": val,
        "exists": "1"
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => response.json()).then(data => {
      console.log("search", data)
      // if (data.Object.success == true) {
      //   for (let i = 0; i <= data.Object.data; i++) {
      //   }
      // } else if (data.Object.success == false) {

      // }
    })
  }
}
