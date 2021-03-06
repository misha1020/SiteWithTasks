﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap} from 'rxjs/operators';
import { User } from '../_models';

@Injectable()
export class AuthenticationService {
    private itemDoc: AngularFirestoreDocument<User>;
    item: Observable<User>;
    constructor(private http: HttpClient, public afAuth: AngularFireAuth, private afStore: AngularFirestore) {
        this.item = this.afAuth.authState.pipe(
            switchMap(user => {
              if (user) {
                return this.afStore.doc<User>(`users/${this.afAuth.auth.currentUser.uid}`).valueChanges()
              } else {
                return of(null)
              }
            })
          )
     }

    login(email: string, password: string) {
        return new Promise<any>((resolve, reject) => {
            this.afAuth.auth.signInWithEmailAndPassword(email, password)
                .then(res => {
                    resolve(res);
                  }, err => reject(err))
        }); 
    }

    logout() {
        this.afAuth.auth.signOut();
    }

    getUser()
    {
        return this.afAuth.auth.currentUser;
    }

    tryRegister(user){
        return new Promise<any>((resolve, reject) => {
            this.doRegister(user)
                .then(res => {
                resolve(res);
            }, err => reject(err))
        })
    }

    doRegister(user){
        return new Promise<any>((resolve, reject) => {
            this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
          .then(res => {
            user.id = res.user.uid;
            this.updateUserData(user);
            resolve(res);
          }, err => reject(err))
        })
    }
    
    private updateUserData(user: User) {
        // Sets user data to firestore on login
        const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${user.id}`);
    

        const data: User = {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName
        }
        return userRef.set(data, { merge: true });
    }
}