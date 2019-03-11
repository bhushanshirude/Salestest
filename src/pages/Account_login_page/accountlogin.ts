import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';
import { AccountregisterPage } from '../Account_register_page/accountregister';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-accountlogin',
  templateUrl: 'accountlogin.html',
})
export class AccountloginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountloginPage');
  }
  sign_Up() {
    this.appCtrl.getRootNavs()[0].setRoot(AccountregisterPage)
  }

  forgot() {
    // this.appCtrl.getRootNavs()[0].setRoot(AccountverificationPage)
  }

  login() {
    this.appCtrl.getRootNavs()[0].setRoot(TabsPage)
  }
}
