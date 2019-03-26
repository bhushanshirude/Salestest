import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';
import { AccountregisterPage } from '../Account_register_page/accountregister';
import { TabsPage } from '../tabs/tabs';
import { AccountforgotPage } from '../Account_forgotpassword_page/accountforgot';
import { ServiceProvider } from '../../providers/service';
import { Http } from '@angular/http'

@Component({
  selector: 'page-accountlogin',
  templateUrl: 'accountlogin.html',
})
export class AccountloginPage {
  Api_url;
  error_messages;
  constructor(public navCtrl: NavController, public http: Http, public service: ServiceProvider, public navParams: NavParams, public appCtrl: App) {
    this.Api_url = service.user_api;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountloginPage');
  }

  sign_Up() {
    this.appCtrl.getRootNavs()[0].setRoot(AccountregisterPage)
  }

  forgot() {
    this.appCtrl.getRootNavs()[0].setRoot(AccountforgotPage)
  }

  login(form: any, event: Event) {
    event.preventDefault();
    if (form.valid) {
      fetch(this.Api_url + 'login', {
        method: 'POST',
        body: JSON.stringify({
          "email": form.value.Email,
          "password": form.value.password,
          "device_token": "123123123123123123",
          "device_type": "android",
          "login_by": "manual"
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data.success == true) {
            this.appCtrl.getRootNavs()[0].setRoot(TabsPage)
          } else if (data.success == false) {
            this.error_messages = data.error_messages;
          }
        })
    }
  }

  //   { id: 5, name: "Anil", mobile: "9876543211", email: "nishant_fulmali@brainitec.com", … }
  // chat_picture: "http://192.168.0.12/streamtube-base/placeholder.png"
  // description: ""
  // dob: "0000-00-00"
  // email: "nishant_fulmali@brainitec.com"
  // gender: "male"
  // id: 5
  // login_by: "manual"
  // mobile: "9876543211"
  // name: "Anil"
  // payment_subscription: "0"
  // picture: "http://192.168.0.12/streamtube-base/placeholder.png"
  // push_status: ""
  // social_unique_id: ""
  // success: true
  // token: "2y10gh29OrJ0mRLsqT3sM5hvOeqlJjIO4X6pbm4buDWK1H0zbrvdXCDC"
  // token_expiry: 1556192939
  // user_type: ""


  // }

  // login(form: any, event: Event) {
  //   if (form.valid) {
  //     this.http.post(this.Api_url + 'login',
  //       // form.value
  //       {
  //         "email": form.value.Email,
  //         "password": form.value.password,
  //         "device_token": "123123123123123123",
  //         "device_type": "android",
  //         "login_by": "manual"
  //       }
  //     ).subscribe(resp => {
  //       console.log("AAAAAAAAAAAAAAAAAAAAAA", resp._body)
  //       console.log("BBBBBBBBBBBBBBBBBBBBBBBB", resp['success'])
  //     }, err => {
  //       console.log("EEEEEEEEEEEEERRRRRRRR", err)

  //     })
  //   }
  // }
}