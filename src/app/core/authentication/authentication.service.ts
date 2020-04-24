import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoginContext, User } from '@app/models/user';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Observable } from 'rxjs';
import { Platform } from '@ionic/angular';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: Observable<firebase.User>;
  
  constructor(
    private googlePlus: GooglePlus,
    private platform: Platform,
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore) {
      this.user = this.angularFireAuth.authState;
     }

  getAuth() {
    return this.angularFireAuth.auth;
  }

  googleLogin(){
    return this.googlePlus.login({
      'webClientId': '941054847570-c4tbv2lc8ue1dol6355tuk9ctecujvfn.apps.googleusercontent.com',
      'offline': true 
    });
  }

  authGoogle(userGoogle){
    return this.angularFireAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(userGoogle.idToken));
  }

  async nativeGoogleLogin(): Promise<any>{
    try {
      const gplusUser = await this.googlePlus.login({
        'webClientId': 'INSERT-YOUR-webClientId',
        'offline': true,
        'scopes': 'profile email'
      })
      return await this.angularFireAuth.auth.signInWithCredential(
        firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken)
      )
    } catch (error) {
      console.log(error)
    }
  }

  async webGoogleLogin(){
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      return await this.angularFireAuth.auth.signInWithPopup(provider)
    } catch(error){
      console.log(error)
    }
  }


  login(user: LoginContext) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  register(user: LoginContext) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  usuarios(user: any, groupUser){
    return this.angularFirestore.collection('usuarios').doc(groupUser.user.uid).set(user)
  }

  logout(){
    if(this.platform.is('cordova')){
      this.googlePlus.logout();
    }
    return this.angularFireAuth.auth.signOut();
  }
}
