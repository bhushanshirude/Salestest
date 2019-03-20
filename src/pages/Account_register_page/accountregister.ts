import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AccountloginPage } from '../Account_login_page/accountlogin';

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
    // event.preventDefault();
    // if (form.valid) {
    //   let signupData = {
    //     personalDetails: form.value
    //   }
    //   console.log('personalDetails', signupData.personalDetails)
    // }
    this.appCtrl.getRootNavs()[0].setRoot(TabsPage)
  }

  singin() {
    this.appCtrl.getRootNavs()[0].setRoot(AccountloginPage)
  }
}
