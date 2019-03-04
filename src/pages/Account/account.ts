import { Component } from '@angular/core';
import { NavController, NavParams, App, ViewController, MenuController } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public menuCtrl: MenuController, public navParams: NavParams, public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  viewDidEnter() {
    console.log('ionViewDidLoad AccountPage');
  }

  viewDidLeave() {
    console.log('ionViewDidLoad AccountPage');
  }

  viewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  viewWillEnter() {
    console.log('ionViewDidLoad AccountPage');
  }

  viewWillLeave() {
    console.log('ionViewDidLoad AccountPage');
  }

  viewWillUnload() {
    console.log('ionViewDidLoad AccountPage');
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
    this.appCtrl.getRootNav().setRoot(TabsPage);
  }

  setting() {
    this.appCtrl.getRootNavs()[0].push(SettingPage);
  }
}
