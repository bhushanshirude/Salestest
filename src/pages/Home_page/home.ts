import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { AccountPage } from '../Account/account';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public appCtrl: App) { }
  
  account() {
    this.appCtrl.getRootNavs()[0].push(AccountPage);
  }
}
