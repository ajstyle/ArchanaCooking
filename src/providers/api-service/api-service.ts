import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiceProvider {

  apiUrl = 'https://www.googleapis.com/youtube/v3' ;
  apiKey = 'AIzaSyAFjOpYmBnaO0kB-i5n6Fbc_u8kQhnK_Os' ;


  constructor(public http: Http) {

  }

  getPlaylist(maxResult,channelId,part) {
     return this.http.get(this.apiUrl + '/playlists?maxResults=' + maxResult + '&channelId=' + channelId + '&key=' + this.apiKey + '&part=' +  part) ;
    }

  getPlaylistList(maxResult,PlaylistId,part) {
     return this.http.get(this.apiUrl + '/playlistItems?maxResults=' + maxResult + '&playlistId=' + PlaylistId + '&key=' + this.apiKey + '&part=' +  part) ;
    }

}
