import { Injectable } from '@angular/core';
import { Problem } from '../_models';
import { prList } from '../problem-list/problems'
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable()
export class ProblemService {
    private itemColl: AngularFirestoreCollection<Problem>;
    item: Observable<Problem[]>;
    constructor(private afStore: AngularFirestore) {
        this.itemColl = this.afStore.collection('problems');
        this.item = this.itemColl.valueChanges();
    	}
}