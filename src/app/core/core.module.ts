import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationGuard } from './guards';

@NgModule({
    declarations: [],
    entryComponents: [],
    imports: [IonicModule.forRoot()],
    providers: [
      StatusBar,
      SplashScreen,
      AuthenticationGuard,
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
    bootstrap: []
})
export class CoreModule {}
