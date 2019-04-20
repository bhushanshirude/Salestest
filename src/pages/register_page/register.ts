import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { HomePage } from '../Customer_page/home';
// import { NavController, NavParams } from 'ionic-angular';
// import { TabsPage } from '../tabs/tabs';
// import { Http } from '@angular/http';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {
  constructor(public navCtrl: NavController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  create(form: any, event: Event) {
    if (form.valid) {
      let signupData = {
        personalDetails: form.value
      }
      this.navCtrl.setRoot(HomePage,{
        data:signupData.personalDetails
      })
    }
  }
}



