import { Component } from '@angular/core';
import { HomePage } from '../home_page/home';
import { TrendingPage } from '../Trending_page/trending';
import { SubscriptionPage } from '../Subscription_page/subscription';
import { BlogPage } from '../blog_page/blog';
import { LibraryPage } from '../library_page/library';



@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'

})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TrendingPage;
  tab3Root = SubscriptionPage;
  tab4Root = BlogPage;
  tab5Root = LibraryPage;
  constructor() {

  }
}
