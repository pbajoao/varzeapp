import { Component, OnInit } from '@angular/core';
import { EventHandlerService } from '@app/core/services/event/event-handler.service';
import { EventConstants } from '@app/core/services/event/event-constants';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.page.html',
  styleUrls: ['./edit-person.page.scss'],
})
export class EditPersonPage implements OnInit {

  groupbtn = [
    {href: 'edit-photo-person', icon: 'camera-outline', name: 'Alterar foto do perfil'},
    {href: 'edit-photo-background-person', icon: 'image-outline', name: 'Alterar foto da capa'},
    {href: 'personal-data-person', icon: 'people-outline', name: 'Dados pessoais'},
    {href: 'player-data-person', icon: 'football-outline', name: 'Dados do jogador'},
    {href: 'reset-password-person', icon: 'key-outline', name: 'Alterar senha'}
  ]
  constructor(private eventHandlerService: EventHandlerService) { }

  ngOnInit() {
    this.eventHandlerService.sendEvent(EventConstants.events.alterarDados)
  }

}
