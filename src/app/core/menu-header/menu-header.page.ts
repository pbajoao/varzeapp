import { Component, OnInit } from '@angular/core';
import { Menu } from '@app/models/menu/menu.model';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.page.html',
  styleUrls: ['./menu-header.page.scss'],
})
export class MenuHeaderPage implements OnInit {

  groupmenus: Menu[] = []
  selectedPath = '';
  
  constructor(private router: Router) { 
    this.router.events.subscribe( (event: RouterEvent) =>{
      if ( event && event.url ) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {
    this.groupMenu();
  }

  groupMenu() {
    this.groupmenus.push(
      new Menu('home', 'home-outline', 'Início')
    );
    this.groupmenus.push(
      new Menu('sair', 'log-out-outline', 'Sair')
    );
  }

}
