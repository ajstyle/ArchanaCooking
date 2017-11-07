import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiServiceProvider} from '../../providers/api-service/api-service' ;
import { PlayVideoPage } from '../play-video/play-video';

/**
 * Generated class for the PlaylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html',
})
export class PlaylistPage {
    id : string ;
    playlists
  constructor(public navCtrl: NavController, public navParams: NavParams , public apiService: ApiServiceProvider ) {
  this.id = this.navParams.get('id');
  console.log('----------',this.id)
 this.apiService.getPlaylistList(25,this.id,'snippet,contentDetails').map(res => res.json()).subscribe(data => {
 this.playlists= data.items;
        console.log(this.playlists) ;
    });
}



  itemTap(id){
      this.navCtrl.push(PlayVideoPage , {
        id : id
      });
  }

}
