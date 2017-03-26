import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { UserPage } from '../user/user';
import { GooglePlus, NativeStorage } from 'ionic-native';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {}

  doGoogleLogin(){
    let nav = this.navCtrl;
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    GooglePlus.login({
      'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': '589485641522-opsbpuhcv1hq24fkuqmerabsc4o02i5l.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true
    })
    .then(function (user) {
      loading.dismiss();

      NativeStorage.setItem('user', {
        name: user.displayName,
        email: user.email,
        picture: user.imageUrl
      })
      .then(function(){
        nav.push(UserPage);
      }, function (error) {
        console.log(error);
      })
    }, function (error) {
      loading.dismiss();
    });
}

}
