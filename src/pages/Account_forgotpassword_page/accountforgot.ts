import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';
import { AccountloginPage } from '../Account_login_page/accountlogin';
import { AccountverificationPage } from '../Account_verification_page/accountverification';

@Component({
  selector: 'page-accountforgot',
  templateUrl: 'accountforgot.html',
})
export class AccountforgotPage {

  constructor(public navCtrl: NavController, public appCtrl: App, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountforgotPage');
  }

  singin() {
    this.appCtrl.getRootNavs()[0].setRoot(AccountloginPage)
  }

  register() {
    this.appCtrl.getRootNavs()[0].setRoot(AccountverificationPage)
  }
}
