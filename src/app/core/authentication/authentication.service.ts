import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginContext, User } from '@app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private angularFireAuth: AngularFireAuth) { }

  getAuth() {
    return this.angularFireAuth.auth;
  }

  login(user: LoginContext) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  register(user: LoginContext) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  logout(){
    return this.angularFireAuth.auth.signOut();
  }
}
