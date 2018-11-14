import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import {  AddPage } from '../add/add';
import { ThinkPage } from '../think/think';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = AddPage;
  tab4Root = ThinkPage;
  tab5Root = ContactPage;
  constructor() {

  }
}
