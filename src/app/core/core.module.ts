import { NgModule } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationGuard } from './guards';

@NgModule({
    declarations: [],
    entryComponents: [],
    imports: [],
    providers: [
      StatusBar,
      SplashScreen,
      AuthenticationGuard
    ],
    bootstrap: []
})
export class CoreModule {}
