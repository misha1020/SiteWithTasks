import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../_models';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient, public afAuth: AngularFireAuth) { }

    login(username: string, password: string) {
        return new Promise<any>((resolve, reject) => {
            this.afAuth.auth.signInWithEmailAndPassword(username, password)
                .then(res => {
                    resolve(res);
                  }, err => reject(err))
        });
        /*return this.http.post<any>('http://localhost:4000/users/authenticate', { username: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));*/
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    tryRegister(user: User){
        return new Promise<any>((resolve, reject) => {
            this.doRegister(user)
                .then(res => {
                resolve(res);
            }, err => reject(err))
        })
    }

    doRegister(value){
        return new Promise<any>((resolve, reject) => {
            this.afAuth.auth.createUserWithEmailAndPassword(value.username, value.password)
          .then(res => {
            resolve(res);
          }, err => reject(err))
        })
      }
}