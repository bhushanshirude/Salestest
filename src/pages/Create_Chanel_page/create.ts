import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ChannelhomePage } from './Channel_home_page/channelhome';
import { ChannelvideosPage } from './Channel_videos_page/channelvideos';
import { ChannelplaylistPage } from './Channel_playlist_page/channelplaylist';
import { ChannelpaymethodPage } from './Channel_paymethod_page/channelpaymethod';
import { ChannelaboutPage } from './Channel_about_page/channelabout';
import { AddvideopopoverPage } from '../Add_video_popover_page/addvideopopover';
import { UploadTabsPage } from '../upload-tabs/upload-tabs';

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
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

  presentPopover(myEvent) {
    this.modalCtrl.create(AddvideopopoverPage, { cssClass: 'inset-modal' }).present();
    // let popover = this.popoverCtrl.create(AddvideopopoverPage);
    // popover.present({
    //   ev: myEvent
    // });
  }

  edit() {
    this.navCtrl.push(UploadTabsPage);
    
  }

}
