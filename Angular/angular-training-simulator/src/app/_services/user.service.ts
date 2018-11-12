import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

import { User } from '../_models';

@Injectable()
export class UserService {
	
	public users: AngularFireList<User>;
    constructor(private http: HttpClient, private db: AngularFireDatabase) {
		this.users = db.list('/users');
	}

    getAll() {
        return this.http.get<User[]>('http://localhost:4000/users');
    }

    getById(id: number) {
		strind key = '-LR7TAxkSs8ng7XMvzJ7';
		const itemPath =  `/items/${key}`;
		this.item = this.db.object('/users');
		console.log(item);
        return this.http.get('http://localhost:4000/users/' + id);
    }

    register(user: User) {
		this.users.push(user);
        return this.http.post('http://localhost:4000/users/register', user);
    }

    update(user: User) {
		
        return this.http.put('http://localhost:4000/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('http://localhost:4000/users/' + id);
    }
}