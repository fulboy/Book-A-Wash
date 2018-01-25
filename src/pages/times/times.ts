import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TimesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-times',
  templateUrl: 'times.html',
})
export class TimesPage {
today
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.today = new Date().toISOString();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimesPage');
  }
Booking()
{
  this.navCtrl.push('BookingPage')

}
}
