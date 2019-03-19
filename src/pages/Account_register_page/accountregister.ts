import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { AccountloginPage } from '../Account_login_page/accountlogin';
// import { TabsPage } from '../tabs/tabs';
// import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { NgForm } from '@angular/forms';

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
  // confpassword: AbstractControl;
  register_data = { first_name: '', phone_no: '', password: '', confpassword: '', email: '' }
  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
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
      console.log('personalDetails', signupData.personalDetails)
    }
    // console.log("A", this.register_data.first_name)
    // console.log("A", this.register_data.password)
    // console.log("A", this.register_data.phone_no)
    // console.log("A", this.register_data.confpassword)
    // console.log("A", this.register_data.email)

    // console.log("first_name", this.first_name.value);
    // console.log("phone_no", this.phone_no.value);
    // console.log("password", this.password.value);
    // console.log("email", this.email.value);
    // console.log("confpassword", this.confpassword.value);
    // this.appCtrl.getRootNavs()[0].setRoot(TabsPage)
  }
}
