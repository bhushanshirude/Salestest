import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-playlist-popup',
  templateUrl: 'playlist-popup.html',
})
export class PlaylistPopupPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaylistPopupPage');
  }
  dismiss() {
    this.viewCtrl.dismiss()
  }
  Send() { }
}
