﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

import { User } from '../_models';

@Injectable()
export class UserService {
	
	public users: AngularFireList<User>;
    constructor(private http: HttpClient, private db: AngularFireDatabase, public afAuth: AngularFireAuth) {
		this.users = db.list('/users');
	}

    getAll() {
        return this.http.get<User[]>('http://localhost:4000/users');
    }

    getById(id: number) {
        return this.http.get('http://localhost:4000/users/' + id);
    }

    register(user) {
		//this.users.push(user);
		this.afAuth.auth.createUserWithEmailAndPassword(user.username, user.password).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			alert(errorMessage);
			// ...
		});
        return this.http.post('http://localhost:4000/users/register', user);
    }

    update(user: User) {
		
        return this.http.put('http://localhost:4000/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('http://localhost:4000/users/' + id);
    }
}