import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';
import { AccountloginPage } from '../Account_login_page/accountlogin';
import { AccountverificationPage } from '../Account_verification_page/accountverification';
import { ServiceProvider } from '../../providers/service';

@Component({
  selector: 'page-accountforgot',
  templateUrl: 'accountforgot.html',
})
export class AccountforgotPage {
  error_messages;
  Api_url;
  constructor(public navCtrl: NavController, public service: ServiceProvider, public appCtrl: App, public navParams: NavParams) {
    this.Api_url = service.user_api;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountforgotPage');
  }

  singin() {
    this.appCtrl.getRootNavs()[0].setRoot(AccountloginPage)
  }

  send(form: any, event: Event) {
    event.preventDefault();
    if (form.valid) {

      console.log("form.value.Email", form.value.Email)
      fetch(this.Api_url + 'forgotpassword', {
        method: 'POST',
        body: JSON.stringify({
          "email": form.value.Email,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data.success == true) {
            this.appCtrl.getRootNavs()[0].setRoot(AccountverificationPage)
          } else if (data.success == false) {
            this.error_messages = data.error_messages;
          }
        })
    }
  }
}
