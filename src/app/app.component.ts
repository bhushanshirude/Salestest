import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { AccountloginPage } from '../pages/Account_login_page/accountlogin';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;
  // rootPage: any = AccountloginPage;

  constructor(platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.statusBar.backgroundColorByHexString('#b8b8b8');
      // this.splashScreen.hide();
      // statusBar.styleDefault();
      this.statusBar.styleLightContent();
      this.statusBar.styleBlackTranslucent();
      this.statusBar.styleBlackOpaque();
      this.splashScreen.hide();
    });
  }
}


