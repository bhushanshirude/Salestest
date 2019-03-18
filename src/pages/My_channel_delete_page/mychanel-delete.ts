import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

@Component({
  selector: 'page-mychanel-delete',
  templateUrl: 'mychanel-delete.html',
})
export class MychanelDeletePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MychanelDeletePage');
  }

  dismiss() {
    this.viewCtrl.dismiss()
  }

}
