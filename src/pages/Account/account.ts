import { Component } from '@angular/core';
import { NavController, NavParams, App, ViewController, MenuController } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import { TabsPage } from '../tabs/tabs';
import { SkipaddPage } from '../Skip_add_page/skipadd';
import { UploadTabsPage } from '../upload-tabs/upload-tabs';
import { MychannelPage } from '../My_channel_page/mychannel';
import { CreatenewPage } from '../Create_New_channel_page/createnew';

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
  create() {
    this.appCtrl.getRootNavs()[0].push(CreatenewPage);
  }

  myChannel() {
    this.appCtrl.getRootNavs()[0].push(MychannelPage);
  }

  skip() {
    this.appCtrl.getRootNavs()[0].push(SkipaddPage);
  }

  skips() {
    this.appCtrl.getRootNavs()[0].push(UploadTabsPage);
  }

}
