import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VideoDetailsPage } from '../../Video_details_page/video-details';
import { App } from 'ionic-angular/components/app/app';

@Component({
  selector: 'page-channelhome',
  templateUrl: 'channelhome.html',
})
export class ChannelhomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChannelhomePage');
  }


  seen() {
    this.appCtrl.getRootNavs()[0].push(VideoDetailsPage);
  }
  
}
