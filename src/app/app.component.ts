import { Component } from '@angular/core';
import { MdToolbar} from '@angular2-material/toolbar';
import { MdButton} from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES} from '@angular2-material/list';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MdIcon, MdIconRegistry} from '@angular2-material/icon';

import { ContactsComponent } from './+contacts/contacts.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ MD_SIDENAV_DIRECTIVES,
                MD_LIST_DIRECTIVES, 
                MdToolbar, 
                MdIcon, 
                MdButton, 
                ContactsComponent],
  providers: [MdIconRegistry]
})
export class AppComponent {
  title: string = 'Contact list';
  canShowForm: boolean = false;

  constructor() {}

  navigateTo(route:string) {
    //console.log("Navigate to ", route);
    return null;
  }

}
