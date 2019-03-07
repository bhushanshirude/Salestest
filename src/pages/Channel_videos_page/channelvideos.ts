import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-channelvideos',
  templateUrl: 'channelvideos.html',
})
export class ChannelvideosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChannelvideosPage');
  }

}
