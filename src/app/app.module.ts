import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { SuperTabsModule } from 'ionic2-super-tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiceProvider } from '../providers/service';
import { HttpModule } from '@angular/http';
import { SubscriptionPage } from '../pages/Route_page/subscription';
import { BlogPage } from '../pages/order_page/blog';
import { LibraryPage } from '../pages/More_page/library';
import { TrendingPage } from '../pages/Salesmem_page/trending';
import { HomePage } from '../pages/Customer_page/home';
import { RegisterPage } from '../pages/register_page/register';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    RegisterPage,
    HomePage,
    TrendingPage,
    SubscriptionPage,
    BlogPage,
    LibraryPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    RegisterPage,
    HomePage,
    TrendingPage,
    SubscriptionPage,
    BlogPage,
    LibraryPage,
  ],
  providers: [
    ServiceProvider,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
