import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChannelhomePage } from '../Channel_home_page/channelhome';
import { ChannelvideosPage } from '../Channel_videos_page/channelvideos';
import { ChannelpaymethodPage } from '../Channel_paymethod_page/channelpaymethod';
import { ChannelplaylistPage } from '../Channel_playlist_page/channelplaylist';
import { ChannelaboutPage } from '../Channel_about_page/channelabout';

@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {
  showIcons: boolean = true;
  showTitles: boolean = true;
  pageTitle: string = 'Partial Home';
  tab1Root = ChannelhomePage;
  tab2Root = ChannelvideosPage;
  tab3Root = ChannelplaylistPage;
  tab4Root = ChannelpaymethodPage;
  tab5Root = ChannelaboutPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

}
