import { Component } from '@angular/core';
// import { NavController, NavParams } from 'ionic-angular';
// import { TabsPage } from '../tabs/tabs';
// import { Http } from '@angular/http';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {
  constructor() {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  create(form: any, event: Event) {
    if (form.valid) {
      let signupData = {
        personalDetails: form.value
      }
      console.log("RRRRRRRRRRRRRRRRRRRRRR", signupData.personalDetails)
      //   let headers = new Headers();
      //   headers.append('Content-Type', 'application/json');
      //   return this.http.post('assets/record.json', signupData.personalDetails, {
      //   })
      //     .map(res => res.json())
    }
  }
}



