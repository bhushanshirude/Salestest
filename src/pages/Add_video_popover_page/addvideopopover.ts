import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

@Component({
  selector: 'page-addvideopopover',
  templateUrl: 'addvideopopover.html',
})
export class AddvideopopoverPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddvideopopoverPage');
  }
  dismiss() {
    this.viewCtrl.dismiss()
  }
  Send() { }
}
