import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginContext, User } from '@app/models/user';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    user: Observable<firebase.User>;

    constructor(
        private angularFirestore: AngularFirestore) { }

    usuarios(user: any, groupUser) {
        return this.angularFirestore.collection('usuarios').doc<User>(groupUser.user.uid).set(user)
    }

    getUsuario(id: any) {
        return this.angularFirestore.collection('usuarios').doc<User>(id).valueChanges();
    }

    updateDatePersonal(id, person) {
        return this.angularFirestore.collection('usuarios').doc<User>(id).update(person);
    }
}
