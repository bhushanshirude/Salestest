import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { AccountPage } from '../Account/account';
import { NotificationPage } from '../Notification_page/notification';
import { MessagePage } from '../Message_page/message';

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
  constructor(public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogPage');
  }
  account() {
    this.appCtrl.getRootNavs()[0].push(AccountPage);
  }
}
