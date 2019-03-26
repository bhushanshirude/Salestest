import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { AccountloginPage } from '../Account_login_page/accountlogin';
import { ServiceProvider } from '../../providers/service';

@Component({
  selector: 'page-accountregister',
  templateUrl: 'accountregister.html',
})
export class AccountregisterPage {
  // formgroup: FormGroup;
  // first_name: AbstractControl;
  // phone_no: AbstractControl;
  // email: AbstractControl;
  // password: AbstractControl;
  Api_url;
  error_messages;
  // confpassword: AbstractControl;
  register_data = { first_name: '', phone_no: '', password: '', confpassword: '', email: '' }
  constructor(public navCtrl: NavController, public service: ServiceProvider, public navParams: NavParams, public appCtrl: App) {
    this.Api_url = service.user_api;
    // this.formgroup = formbuilder.group({
    //   first_name: ['', Validators.required],
    //   phone_no: ['', Validators.required],
    //   password: ['', Validators.required],
    //   confpassword: ['', Validators.required],
    //   email: ['', Validators.required],
    // })
    // this.first_name = this.formgroup.controls['first_name'];
    // this.phone_no = this.formgroup.controls['phone_no'];
    // this.email = this.formgroup.controls['email'];
    // this.password = this.formgroup.controls['password'];
    // this.confpassword = this.formgroup.controls['confpassword'];

    this.register_data = {
      first_name: '',
      phone_no: '',
      password: '',
      confpassword: '',
      email: '',
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountregisterPage');
  }

  register(form: any, event: Event) {
    event.preventDefault();
    if (form.valid) {
      let signupData = {
        personalDetails: form.value
      }
      fetch(this.Api_url + 'register', {
        method: 'POST',
        body: JSON.stringify({
          "email": signupData.personalDetails.Email,
          "password": signupData.personalDetails.password,
          "device_token": "123123123123123123",
          "device_type": "android",
          "login_by": "manual",
          "social_unique_id": "",
          "name": signupData.personalDetails.FirstName,
          "mobile": signupData.personalDetails.phone,
          "picture": "",
          "gender": "male"
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log("Api_url", data)
          if (data.success == true) {
            this.appCtrl.getRootNavs()[0].setRoot(AccountloginPage)
          } else if (data.success == false) {
            this.error_messages = data.error_messages;
          }
        })
    }
  }

  //   {success: true, id: 12, name: "Rajeshq", mobile: "8979865566", gender: "male", …}
  // email: "rajesh@gmail.com"
  // gender: "male"
  // id: 12
  // login_by: "manual"
  // mobile: "8979865566"
  // name: "Rajeshq"
  // payment_subscription: "0"
  // picture: "http://192.168.0.12/streamtube-base/placeholder.png"
  // push_status: ""
  // social_unique_id: ""
  // success: true
  // token: "2y10p7dlhewDZVloToKOorWg7sfkc2HyE4lwqu3HFODWlyEonHk"
  // token_expiry: 1556196438
  // user_type: ""

  singin() {
    this.appCtrl.getRootNavs()[0].setRoot(AccountloginPage)
  }
}
