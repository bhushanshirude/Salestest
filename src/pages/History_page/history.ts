import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';
import { VideoDetailsPage } from '../Video_details_page/video-details';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }
  seen() {
    this.appCtrl.getRootNavs()[0].push(VideoDetailsPage);
  }
}
