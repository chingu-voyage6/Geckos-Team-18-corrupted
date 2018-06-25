import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  private setUserDoc(auth) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${auth.user.uid}`
    );

    const data: User = {
      uid: auth.user.uid,
      displayName: '',
      role: 'User'
    };

    if (auth.additionalUserInfo.providerId != 'password') {
      data.displayName = auth.user.displayName;
    }

    return userRef.set(data);
  }

  googleSignIn() {
    return this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(user => {
        return this.setUserDoc(user);
      })
      .catch(error => {
        console.log(error);
      });
  }

  githubSignIn() {
    return this.afAuth.auth
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then(user => {
        return this.setUserDoc(user);
      })
      .catch(error => {
        console.log(error);
      });
  }

  emailSignUp(email: string, password: string) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        return this.setUserDoc(user);
      })
      .catch(error => {
        console.log(error);
      });
  }

  emailSignIn(email: string, password: string) {
    this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.getUser(user);
      })
      .catch(error => {
        console.log(error);
      });
  }

  signOut() {
    this.afAuth.auth.signOut();
    this.user = of(null);
  }

  //TODO check constructor if it can be merged
  getUser(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );

    this.user = userRef.valueChanges();
  }

  updateUser(user: User, data: any) {
    return this.afs.doc(`users/${user.uid}`).update(data);
  }
}
