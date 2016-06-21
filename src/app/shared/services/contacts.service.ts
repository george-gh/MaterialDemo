import { Injectable } from '@angular/core';
import { Contact } from './../models/contact';

@Injectable()
export class ContactsService {
    conts: Contact[] = [
        {
            name: 'Mario',
            surname: 'Rossi',
            email: 'mario.rossi@gmail.com',
            photo: 'http://www.hit4hit.org/img/login/user-icon-6.png',
            description: 'Il nome più comune in Italia'
        },
        {
            name: 'Federico',
            surname: 'Bianchi',
            email: 'fede.bianchi@outlook.com',
            photo: 'http://www.hit4hit.org/img/login/user-icon-6.png',
            description: 'Un tipico nome italiano'
        },{
            name: 'Giuseppe',
            surname: 'Bianchi',
            email: 'giuseppe.bianchi@libero.it',
            photo: 'http://www.hit4hit.org/img/login/user-icon-6.png',
            description: 'Altro classico esempio'
        }
    ];

    constructor() { }

    getAllContacts(): Contact[] {
        return this.conts;
    }

    addNewContact(contact: Contact): void {
        this.conts.push(contact);
    }

    removeContact(index: number): void {

    }

    updateContact(contact: Contact, index: number): void {

    }

}