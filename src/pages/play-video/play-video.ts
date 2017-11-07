import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlayVideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-play-video',
  templateUrl: 'play-video.html',
})
export class PlayVideoPage {
id : string ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.get('id');
  console.log('----------',this.id)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayVideoPage');
  }

}
