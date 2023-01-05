import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import firebase from 'firebase/compat/app';

import { BehaviorSubject, Observable, of } from 'rxjs'
import { map, delay, filter, switchMap, take, } from 'rxjs/operators'

import IUser from '../models/user.model';
import { Router } from '@angular/router';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { TitleCasePipe } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.usersCollection = db.collection('users');

    this.isAuthenticated$ = auth.user.pipe(
      map(user => !!user)
    );

    this.isAuthenticatedWithDelay$ = this.isAuthenticated$.pipe(
      delay(1000)
    )

    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => this.route.firstChild),
      switchMap(route => route?.data ?? of({}))
    ).subscribe(data => {
      this.redirect = data['authOnly'] ?? false
    });

    // auth.user.subscribe(user => this.user = user);
    this.userName$ = auth.user.pipe(
      map(user => user?.displayName || '')
    )
    this.uid$ = auth.user.pipe(
      map(user => { if (user) { return user?.uid;  } else { return '' } })
    )
  }



  private usersCollection: AngularFirestoreCollection<IUser>
  public isAuthenticated$: Observable<boolean>
  public userName$: Observable<string>;
  public isAuthenticatedWithDelay$: Observable<boolean>
  private redirect = false;
  public uid$: Observable<string>;


  public async createUser(userData: IUser) {

    if (!userData.password) {
      throw new Error("No Password")
    }
    const userCred = await this.auth.createUserWithEmailAndPassword(
      userData.email as string, userData.password as string
    );

    if (!userCred.user) {
      throw new Error("User can't be found");
    }
    await this.usersCollection.doc(userCred.user?.uid).set({
      name: userData.name,
      email: userData.email
    });

    await userCred.user.updateProfile({
      displayName: userData.name
    })
  }

  public async logout($event?: Event) {
    if ($event) {
      $event.preventDefault();
    }

    await this.auth.signOut();
    if (this.redirect) {
      await this.router.navigateByUrl('/');
    }
  }

  public async test($test?: Event) {
  }

  public async getUid() {
  }
}
