import { Injectable } from '@angular/core';
import { Problem, Coment, fsComent, User } from '../_models';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { forEach } from '@angular/router/src/utils/collection';


@Injectable()
export class ProblemService {
    private itemColl: AngularFirestoreCollection<Problem>;
    item: Observable<Problem[]>;
    private fsComentsColl: AngularFirestoreCollection<fsComent>;
    private fsComents: Observable<fsComent[]>;
    private userFBDoc: AngularFirestoreDocument<User>;
    private userFB: Observable<User>;
    private user: User;
    private coments: Coment[];


    constructor(private afStore: AngularFirestore) {
        this.itemColl = this.afStore.collection('problems');
        this.item = this.itemColl.valueChanges();
    }
        
    getInfo(id : string){
        return this.afStore.doc<Problem>(`problems/${id}`).valueChanges()
    }

    postComent(idUser: string, idProblem: string, text: string){
        const data: fsComent = {
            id: this.afStore.createId(),
            idUser: idUser,
            idProblem: idProblem,
            Text: text
          }
        const comentRef: AngularFirestoreDocument<any> = this.afStore.doc(`comentaries/${data.id}`);
        comentRef.set(data, { merge: true });
    }

    getComents(id: string){
        this.fsComentsColl = this.afStore.collection('comentaries', ref => ref.where('idProblem', '==', id ));
        this.fsComents = this.fsComentsColl.valueChanges();
        let coments: Coment[] = [];

        this.fsComents.subscribe(dataArr => {
            this.coments = Coment[dataArr.length];
            dataArr.forEach(data => {
                this.userFBDoc =  this.afStore.doc<User>(`users/${data.idUser}`);
                this.userFB = this.userFBDoc.valueChanges();
                this.userFB.subscribe(user => {this.user = user as User

                    const com: Coment = {
                        id: data.id,
                        idProblem: data.id,
                        Text: data.Text,
                        user: this.user
                    }
                    coments.push(com);
                });
            });
        });

        return coments;
    }
}