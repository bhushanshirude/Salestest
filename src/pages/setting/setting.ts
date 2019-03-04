import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
    this.appCtrl.getRootNavs()[0].setRoot(TabsPage);
  }

}
