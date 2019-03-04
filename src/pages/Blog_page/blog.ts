import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { AccountPage } from '../Account/account';

@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
})
export class BlogPage {

  constructor(public navCtrl: NavController, public appCtrl: App, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogPage');
  }
  account() {
    this.appCtrl.getRootNavs()[0].push(AccountPage);
  }
}
