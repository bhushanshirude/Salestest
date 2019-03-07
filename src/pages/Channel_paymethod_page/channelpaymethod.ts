import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-channelpaymethod',
  templateUrl: 'channelpaymethod.html',
})
export class ChannelpaymethodPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChannelpaymethodPage');
  }

}
