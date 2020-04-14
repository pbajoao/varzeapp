import { Component, OnInit } from '@angular/core';
import { MenuFooter } from 'src/app/models/menu-footer/menu-footer.model';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  groupmenus: MenuFooter[] = []

  constructor() { }

  ngOnInit() {
    this.groupMenu();
  }

  groupMenu() {
    this.groupmenus.push(
      new MenuFooter('inicio', 'home-outline')
    );
  }
}
