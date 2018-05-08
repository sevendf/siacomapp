import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public vnome_usuario:string = "Arielton Lima"
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(primeiro_numero: number, segundo_numero: number): number{
    return(primeiro_numero+segundo_numero);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad FeedPage');
    //this.somaDoisNumeros(3,3);
  }

}
