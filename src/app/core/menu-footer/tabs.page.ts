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
      new Menu('home', 'pulse-outline')
    );
    this.groupmenus.push(
      new Menu('Buscar', 'search-outline')
    );
    this.groupmenus.push(
      new Menu('Pesquisar', 'add-circle-outline')
    );
    this.groupmenus.push(
      new Menu('Mensagens', 'mail-outline')
    );
    this.groupmenus.push(
      new Menu('person', 'person-outline')
    );
  }
}
