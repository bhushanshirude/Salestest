import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { AccountloginPage } from '../Account_login_page/accountlogin';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-accountregister',
  templateUrl: 'accountregister.html',
})
export class AccountregisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountregisterPage');
  }
  singin() {
    this.appCtrl.getRootNavs()[0].setRoot(AccountloginPage)
  }

  register() {
    this.appCtrl.getRootNavs()[0].setRoot(TabsPage)
  }
}
