import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-upload-video-type',
  templateUrl: 'upload-video-type.html',
})
export class UploadVideoTypePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadVideoTypePage');
  }

}
