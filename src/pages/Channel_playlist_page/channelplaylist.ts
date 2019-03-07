import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-channelplaylist',
  templateUrl: 'channelplaylist.html',
})
export class ChannelplaylistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChannelplaylistPage');
  }

}
