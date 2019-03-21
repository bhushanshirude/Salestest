import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';
import { AccountPage } from '../Account/account';
import { NotificationPage } from '../Notification_page/notification';
import { MessagePage } from '../Message_page/message';
import { UploadTabsPage } from '../upload-tabs/upload-tabs';
import { SearchPage } from '../Search_page/search';

@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
})
export class BlogPage {
  showIcons: boolean = true;
  showTitles: boolean = true;
  pageTitle: string = 'Partial Home';
  tab1Root = MessagePage;
  tab2Root = NotificationPage;
  constructor(public appCtrl: App, public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogPage');
  }

  account() {
    this.appCtrl.getRootNavs()[0].push(AccountPage);
  }
  
  video() {
    this.appCtrl.getRootNavs()[0].push(UploadTabsPage);
  }

  search() {
    this.navCtrl.push(SearchPage);
  }
}
