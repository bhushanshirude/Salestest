import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { VideoDetailsPage } from '../../Video_details_page/video-details';
import { App } from 'ionic-angular/components/app/app';
import { PlaylistPopupPage } from '../../Playlist_popup_page/playlist-popup';
import { UploadTabsPage } from '../../upload-tabs/upload-tabs';


@Component({
  selector: 'page-channelplaylist',
  templateUrl: 'channelplaylist.html',
})
export class ChannelplaylistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChannelplaylistPage');
  }

  seen() {
    this.appCtrl.getRootNavs()[0].push(VideoDetailsPage);
  }

  presentPopover(myEvent) {
    this.modalCtrl.create(PlaylistPopupPage, { cssClass: 'inset-modal' }).present();
    // let popover = this.popoverCtrl.create(AddvideopopoverPage);
    // popover.present({
    //   ev: myEvent
    // });
  }

  add(){
    this.appCtrl.getRootNavs()[0].push(UploadTabsPage);
  }
}
