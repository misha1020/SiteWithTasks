import { Component, OnInit } from '@angular/core';
import { ModalService, AuthenticationService } from '../_services';


import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { User } from '../_models';

export interface Item { name: string; }

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	bodyText: string;
	

	constructor(private modalService: ModalService, private auth: AuthenticationService) {
	}

	ngOnInit() {
		this.bodyText = 'This text can be updated in modal 1';
	}
  
	openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }

    logout(){
        this.auth.logout();
    }

    connectToCurrenUser(){

    }
}
