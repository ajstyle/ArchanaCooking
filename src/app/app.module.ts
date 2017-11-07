import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {PlaylistPage} from '../pages/playlist/playlist' ;
import {PlayVideoPage} from '../pages/play-video/play-video' ;

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SafePipe} from '../pipes/safe/safe'
import { Network } from '@ionic-native/network';
import { ApiServiceProvider } from '../providers/api-service/api-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SafePipe,
    PlaylistPage,
    PlayVideoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PlaylistPage,
    PlayVideoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Network,
    ApiServiceProvider
  ]
})
export class AppModule {}
