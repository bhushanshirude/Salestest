import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';
import { MychanelDeletePage } from '../My_channel_delete_page/mychanel-delete';
import { CreatePage } from '../Create_Chanel_page/create';
import { ServiceProvider } from '../../providers/service';

@Component({
  selector: 'page-mychannel',
  templateUrl: 'mychannel.html',
})
export class MychannelPage {
  Api_url;
  constructor(public navCtrl: NavController, public servie: ServiceProvider, public modalCtrl: ModalController, public navParams: NavParams, public appCtrl: App) {
    this.Api_url = servie.user_api;
    this.get_video();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MychannelPage');
  }

  get_video() {
    fetch(this.Api_url + 'channel_videos', {
      method: 'POST',
      body: JSON.stringify(
        {
          "channel_id": "1",
          "exists": "1"

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

  seen() {
    this.appCtrl.getRootNavs()[0].push(CreatePage);
  }
  presentPopover(myEvent) {
    this.modalCtrl.create(MychanelDeletePage, { cssClass: 'inset-modal' }).present();
  }
}
