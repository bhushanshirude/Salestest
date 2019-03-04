import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BlogPage } from '../pages/blog_page/blog';
import { HomePage } from '../pages/home_page/home';
import { LibraryPage } from '../pages/library_page/library';
import { TrendingPage } from '../pages/Trending_page/trending';
import { SubscriptionPage } from '../pages/Subscription_page/subscription';
import { AccountPage } from '../pages/Account/account';
import { SkipaddPage } from '../pages/Skip_add_page/skipadd';
import { SettingPage } from '../pages/setting/setting';

@NgModule({
  declarations: [
    AccountPage,
    MyApp,
    BlogPage,
    HomePage,
    LibraryPage,
    TabsPage,
    TrendingPage,
    SubscriptionPage,
    SkipaddPage,
    SettingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AccountPage,
    MyApp,
    BlogPage,
    HomePage,
    LibraryPage,
    TabsPage,
    TrendingPage,
    SubscriptionPage,
    SkipaddPage,
    SettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
