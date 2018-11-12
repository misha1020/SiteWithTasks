import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient, public afAuth: AngularFireAuth) { }

    login(username: string, password: string) {
		this.afAuth.auth.signInWithEmailAndPassword(username, password)
			.catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				if (errorCode === 'auth/wrong-password') {
					alert('Wrong password.');
				} else {
					alert(errorMessage);
				}
				console.log(error);
			});
        return this.http.post<any>('http://localhost:4000/users/authenticate', { username: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}