import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Network } from '@ionic-native/network';
import {PlaylistPage} from '../playlist/playlist' ;
import {ApiServiceProvider} from '../../providers/api-service/api-service' ;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  playlistPage = PlaylistPage

  // videos : any[] = [
  //   {
  //   title : 'Embedded Ionic Video' ,
  //   url : 'https://www.youtube.com/embed/2JeKfQ2r2r8'
  // }]

  playlistItems

  constructor(public navCtrl: NavController , public http : Http , private network: Network , private apiService : ApiServiceProvider) {
    this.apiService.getPlaylist(25 ,'UCnpQGGLMbnMjtSIksqjOPrw','snippet,contentDetails').map(res => res.json()).subscribe(data => {
        this.playlistItems = data.items;
        console.log(this.playlistItems) ;
    });
  }

  itemTap(id){
      this.navCtrl.push(PlaylistPage , {
        id : id
      });
  }
}
