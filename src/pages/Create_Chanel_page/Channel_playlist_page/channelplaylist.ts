import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VideoDetailsPage } from '../../Video_details_page/video-details';
import { App } from 'ionic-angular/components/app/app';


@Component({
  selector: 'page-channelplaylist',
  templateUrl: 'channelplaylist.html',
})
export class ChannelplaylistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChannelplaylistPage');
  }

  seen() {
    this.appCtrl.getRootNavs()[0].push(VideoDetailsPage);
  }
}
