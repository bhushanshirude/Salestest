import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-upload-video-details',
  templateUrl: 'upload-video-details.html',
})
export class UploadVideoDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadVideoDetailsPage');
  }

}
