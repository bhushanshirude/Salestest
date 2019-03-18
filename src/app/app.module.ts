import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { SuperTabsModule } from 'ionic2-super-tabs';

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
import { CreatePage } from '../pages/Create_Chanel_page/create';
import { AccountloginPage } from '../pages/Account_login_page/accountlogin';
import { AccountverificationPage } from '../pages/Account_verification_page/accountverification';
import { AccountregisterPage } from '../pages/Account_register_page/accountregister';
import { UploadTabsPage } from '../pages/upload-tabs/upload-tabs';
import { UploadVideosPage } from '../pages/upload-tabs/Upload_videos_page/upload-videos';
import { UploadVideoTypePage } from '../pages/upload-tabs/Upload_video_type_page/upload-video-type';
import { UploadVideoDetailsPage } from '../pages/upload-tabs/Upload_video_details_page/upload-video-details';
import { UploadImagePage } from '../pages/upload-tabs/Upload_image_page/upload-image';
import { HistoryPage } from '../pages/History_page/history';
import { WatchLaterPage } from '../pages/Watch_later_page/watch-later';
import { MychannelPage } from '../pages/My_channel_page/mychannel';
import { ChannelaboutPage } from '../pages/Create_Chanel_page/Channel_about_page/channelabout';
import { ChannelhomePage } from '../pages/Create_Chanel_page/Channel_home_page/channelhome';
import { ChannelpaymethodPage } from '../pages/Create_Chanel_page/Channel_paymethod_page/channelpaymethod';
import { ChannelplaylistPage } from '../pages/Create_Chanel_page/Channel_playlist_page/channelplaylist';
import { ChannelvideosPage } from '../pages/Create_Chanel_page/Channel_videos_page/channelvideos';
import { CreatenewPage } from '../pages/Create_New_channel_page/createnew';
import { VideoDetailsPage } from '../pages/Video_details_page/video-details';
import { AddvideopopoverPage } from '../pages/Add_video_popover_page/addvideopopover';
import { MychanelDeletePage } from '../pages/My_channel_delete_page/mychanel-delete';
import { PlaylistPopupPage } from '../pages/Playlist_popup_page/playlist-popup';
import { AccountforgotPage } from '../pages/Account_forgotpassword_page/accountforgot';
import { MychannelEditPage } from '../pages/My_channel_edit_page/mychannel-edit';
import { PopoverPage } from '../pages/popover_page/popover';


@NgModule({
  declarations: [
    AccountPage,
    AccountloginPage,
    AccountverificationPage,
    AccountregisterPage,
    AccountforgotPage,
    AddvideopopoverPage,
    MyApp,
    BlogPage,
    CreatePage,
    ChannelaboutPage,
    ChannelhomePage,
    ChannelpaymethodPage,
    ChannelplaylistPage,
    ChannelvideosPage,
    CreatenewPage,
    HomePage,
    HistoryPage,
    LibraryPage,
    MychannelPage,
    MychannelEditPage,
    MychanelDeletePage,
    PlaylistPopupPage,
    TabsPage,
    TrendingPage,
    PopoverPage,
    SubscriptionPage,
    SkipaddPage,
    SettingPage,
    UploadTabsPage,
    UploadVideosPage,
    UploadVideoTypePage,
    UploadVideoDetailsPage,
    UploadImagePage,
    VideoDetailsPage,
    WatchLaterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AccountPage,
    AccountloginPage,
    AccountverificationPage,
    AccountregisterPage,
    AccountforgotPage,
    AddvideopopoverPage,
    MyApp,
    BlogPage,
    CreatePage,
    ChannelaboutPage,
    ChannelhomePage,
    ChannelpaymethodPage,
    ChannelplaylistPage,
    ChannelvideosPage,
    CreatenewPage,
    HomePage,
    HistoryPage,
    LibraryPage,
    MychannelPage,
    MychannelEditPage,
    MychanelDeletePage,
    PlaylistPopupPage,
    TabsPage,
    TrendingPage,
    PopoverPage,
    SubscriptionPage,
    SkipaddPage,
    SettingPage,
    UploadTabsPage,
    UploadVideosPage,
    UploadVideoTypePage,
    UploadVideoDetailsPage,
    UploadImagePage,
    VideoDetailsPage,
    WatchLaterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
