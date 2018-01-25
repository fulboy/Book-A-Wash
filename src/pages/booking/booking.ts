import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Booking } from '../../models/booking';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../home/home';
import { Observable } from 'rxjs/Observable';
import { Toast } from 'ionic-angular/components/toast/toast';

/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {

  userProfile: Observable<any>;
  booking = {} as Booking;
  car: string;

  constructor(
    public navCtrl: NavController, 
    private afDatabase: AngularFireDatabase, 
    public navParams: NavParams,
    private toast: ToastController,
    private afAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
    this.afAuth.authState.subscribe(data => 
      {if(data && data.email && data.uid)
        {        
          this.toast.create({
          message: `Welcome to Book A Wash, ${data.email}`,
          duration: 3000,
        }).present();

        this.userProfile = this.afDatabase.object(`profile/${data.uid}`).valueChanges();
        
      }
      else{
        this.toast.create({
          message: 'Could not find authentication details',
          duration: 3000
        }).present();
      }
      });
  }

  createBooking()
    {


    }
  

}
