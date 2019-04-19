import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service';
import { RegisterPage } from '../register_page/register';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  records;
  constructor(public navCtrl: NavController, public service: ServiceProvider, public appCtrl: App, private http: Http) {
    this.get();
  }

  open() {
    this.appCtrl.getRootNavs()[0].push(RegisterPage)
  }

  get() {
    this.http.get('assets/record.json').subscribe(
      (employes: any) => {
        employes = employes.json();
        for (let i = 0; i <= employes.length; i++) {
          this.records = employes;
        }
      }
    );
  }
}
