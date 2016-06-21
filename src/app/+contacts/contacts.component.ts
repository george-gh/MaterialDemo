import { Component, OnInit, Input } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MdInput } from '@angular2-material/input';
import { FormBuilder, ControlGroup, Validators } from '@angular/common';

import { ContactsService } from './../shared/services/contacts.service';
import { Contact } from './../shared/models/contact';

@Component({
    moduleId: module.id,
    selector: 'my-contacts',
    templateUrl: 'contacts.component.html',
    styleUrls: ['contacts.component.css'],
    directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MdInput],
    providers: [ContactsService]
})
export class ContactsComponent implements OnInit {
    contacts: Contact[];
    @Input() showForm: boolean;
    addContactForm: ControlGroup;


    constructor(private contService: ContactsService, private fb: FormBuilder) {
        this.contacts = this.contService.getAllContacts();
    }

    ngOnInit() {
        this.addContactForm = this.fb.group({
            'name': ['', Validators.required],
            'surname': ['', Validators.required],
            'email': [''],
            'photo': [''],
            'description': ['']
        })
     }

    addContact(contact: Contact) {
        // console.log('Adding contact, ', this.addContactForm.value);
        this.contService.addNewContact(this.addContactForm.value);
        this.showForm = !this.showForm;
    }

}