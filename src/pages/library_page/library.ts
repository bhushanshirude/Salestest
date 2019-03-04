import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { AccountPage } from '../Account/account';

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

  account() {
    this.appCtrl.getRootNavs()[0].push(AccountPage);
  }

}
