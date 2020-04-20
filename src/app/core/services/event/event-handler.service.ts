import { Injectable } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/analytics';

@Injectable({
  providedIn: 'root'
})
export class EventHandlerService {

  constructor(
      private firebase: AngularFireAnalytics) {}

  sendEvent(eventName: string, params?: any, origin?: firebase.analytics.AnalyticsCallOptions): void {
    this.firebase.logEvent(eventName, params, origin)
  }

}
