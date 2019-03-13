import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

@Component({
  selector: 'page-video-details',
  templateUrl: 'video-details.html',
})
export class VideoDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoDetailsPage');
  }

  seen() {
    this.appCtrl.getRootNavs()[0].push(VideoDetailsPage);
  }

}
