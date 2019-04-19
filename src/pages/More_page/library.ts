import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {

  constructor(public navCtrl: NavController, public appCtrl: App, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }

}
