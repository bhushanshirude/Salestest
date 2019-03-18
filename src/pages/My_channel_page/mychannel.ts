import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';
import { MychanelDeletePage } from '../My_channel_delete_page/mychanel-delete';
import { CreatePage } from '../Create_Chanel_page/create';

@Component({
  selector: 'page-mychannel',
  templateUrl: 'mychannel.html',
})
export class MychannelPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MychannelPage');
  }
  seen() {
    this.appCtrl.getRootNavs()[0].push(CreatePage);
  }
  presentPopover(myEvent) {
    this.modalCtrl.create(MychanelDeletePage, { cssClass: 'inset-modal' }).present();
    // let popover = this.popoverCtrl.create(AddvideopopoverPage);
    // popover.present({
    //   ev: myEvent
    // });
  }
}
