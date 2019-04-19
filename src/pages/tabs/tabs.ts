import { Component } from '@angular/core';
import { HomePage } from '../Customer_page/home';
import { TrendingPage } from '../Salesmem_page/trending';
import { SubscriptionPage } from '../Route_page/subscription';
import { BlogPage } from '../order_page/blog';
import { LibraryPage } from '../More_page/library';



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
