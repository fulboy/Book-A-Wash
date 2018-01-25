import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import {AngularFireAuth} from "angularfire2/auth";
import firebase from 'firebase'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
    public recaptchaVerifier:firebase.auth.RecaptchaVerifier,
    public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController) {
      
       
    }

    ionViewDidLoad() {
      this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    }
  async login(user: User)
  {
    try{
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if(result){
        this.navCtrl.setRoot('HomePage');
      }    
      
    }   

    catch(e)
    {
      console.error(e);
    }
  }

  signIn(phoneNumber: number){
    const appVerifier = this.recaptchaVerifier;
    const phoneNumberString = "+" + phoneNumber;
    firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
      .then( confirmationResult => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        let prompt = this.alertCtrl.create({
        title: 'Enter the Confirmation code',
        inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
        buttons: [
          { text: 'Cancel',
            handler: data => { console.log('Cancel clicked'); }
          },
          { text: 'Send',
            handler: data => {
              confirmationResult.confirm(data.confirmationCode)
                .then(function (result) {
                  // User signed in successfully.
                  console.log(result.user);
                  // ...
                }).catch(function (error) {
                  // User couldn't sign in (bad verification code?)
                  // ...
                });
            }
          }
        ]
      });
      prompt.present();
    })
    .catch(function (error) {
      console.error("SMS not sent", error);
    });    
  }
  

  register()
  {
    this.navCtrl.push('RegisterPage');
  }

  car()
  {
    this.navCtrl.push('CarwashesPage')
  }
}
