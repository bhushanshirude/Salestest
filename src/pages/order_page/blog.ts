import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';

@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
})
export class BlogPage {
  constructor(public appCtrl: App, public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogPage');
  }

  account() {
    // this.appCtrl.getRootNavs()[0].push(AccountPage);
  }
  
  video() {
    // this.appCtrl.getRootNavs()[0].push(UploadTabsPage);
  }

  search() {
    // this.navCtrl.push(SearchPage);
  }
}
