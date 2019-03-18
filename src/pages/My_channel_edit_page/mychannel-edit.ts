import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-mychannel-edit',
  templateUrl: 'mychannel-edit.html',
})
export class MychannelEditPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MychannelEditPage');
  }

}
