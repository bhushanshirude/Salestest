import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';
import { AccountregisterPage } from '../Account_register_page/accountregister';
import { TabsPage } from '../tabs/tabs';
import { AccountforgotPage } from '../Account_forgotpassword_page/accountforgot';
// import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms'

@Component({
  selector: 'page-accountlogin',
  templateUrl: 'accountlogin.html',
})
export class AccountloginPage {
  // formgroup: FormGroup;
  // first_name: AbstractControl;
  // last_name: AbstractControl;
  // email: AbstractControl;
  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
    // this.formgroup = formbuilder.group({
    //   first_name: ['', Validators.required, Validators.maxLength(20)],
    //   last_name: ['', Validators.required, Validators.maxLength(20)],
    //   email: ['', Validators.pattern("/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/")],

    // })
    // this.first_name = this.formgroup.controls['first_name'];
    // this.last_name = this.formgroup.controls['last_name'];
    // this.email = this.formgroup.controls['email'];
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

  login() {
    // console.log("this.first_name ", this.first_name)
    // console.log("this.last_name ", this.last_name)
    this.appCtrl.getRootNavs()[0].setRoot(TabsPage)
  }
}
