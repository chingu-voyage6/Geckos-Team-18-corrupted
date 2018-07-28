import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { User } from '@auth/models/user.model';
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

  get uid(): string {
    return this.afAuth.auth.currentUser.uid;
  }

  anonymousSignIn() {
    return this.afAuth.auth
      .signInAnonymously()
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
        this.router.navigate(['/collections']);
      })
      .catch(error => {
        console.log(error);
      });
  }

  facebookSignIn() {
    return this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(user => {
        return this.setUserDoc(user);
      })
      .catch(error => {
        console.log(error);
      });
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

  twitterSignIn() {
    return this.afAuth.auth
      .signInWithPopup(new firebase.auth.TwitterAuthProvider())
      .then(user => {
        return this.setUserDoc(user);
      })
      .catch(error => {
        console.log(error);
      });
  }

  signOut() {
    this.afAuth.auth.signOut();
    this.user = of(null);
    this.router.navigate(['/home']);
  }

  private setUserDoc(auth) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${auth.user.uid}`
    );

    const data: User = {
      uid: auth.user.uid,
      displayName: '',
      role: { editor: true }
    };

    switch (auth.additionalUserInfo.providerId) {
      case 'github.com': {
        data.displayName = auth.additionalUserInfo.username;
        break;
      }

      case 'twitter.com':
      case 'facebook.com':
      case 'google.com': {
        data.displayName = auth.user.displayName;
        break;
      }
    }

    this.router.navigate(['/collections']);

    return userRef.set(data);
  }

  //TODO check constructor if it can be merged
  public getUser(user) {
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

  updateUser(user: User, data: any) {
    return this.afs.doc(`users/${user.uid}`).update(data);
  }
}
