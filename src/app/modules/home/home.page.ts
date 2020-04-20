import { Component, OnInit } from '@angular/core';
import { EventHandlerService } from '@app/core/services/event/event-handler.service';
import { EventConstants } from '@app/core/services/event/event-constants';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(
    private eventHandlerService: EventHandlerService) { }

  ngOnInit() {
    this.eventHandlerService.sendEvent(EventConstants.events.home)
  }

}
