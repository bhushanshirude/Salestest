import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-accountverification',
  templateUrl: 'accountverification.html',
})
export class AccountverificationPage {

  constructor(public navCtrl: NavController, public appCtrl: App, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountverificationPage');
  }
  register() {
    this.appCtrl.getRootNavs()[0].setRoot(TabsPage)
  }
}
