import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Carwash } from '../../models/carwash';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the CarwashesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carwashes',
  templateUrl: 'carwashes.html',
})
export class CarwashesPage {

  carwash = {} as Carwash;

  constructor(private afDatabase: AngularFireDatabase, 
    public navCtrl: NavController, public navParams: NavParams) {
  }

  createCarwash()
  {   
    this.afDatabase.list(`Carwash/`).push(this.carwash)
    .then(() => this.navCtrl.setRoot('HomePage')); 
  }

}
