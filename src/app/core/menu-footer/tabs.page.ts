import { Component, OnInit } from '@angular/core';
import { Menu } from '@app/models/menu/menu.model';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  groupmenus: Menu[] = []

  constructor() { }

  ngOnInit() {
    this.groupMenu();
  }

  groupMenu() {
    this.groupmenus.push(
      new Menu('home', 'football-outline')
    );
    this.groupmenus.push(
      new Menu('search', 'search-outline')
    );
    this.groupmenus.push(
      new Menu('notification', 'notifications-outline')
    );
    this.groupmenus.push(
      new Menu('person', 'person-outline')
    );
  }
}
