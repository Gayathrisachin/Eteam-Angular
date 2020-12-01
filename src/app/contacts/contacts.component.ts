import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from './model/contact';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: [
  ]
})
export class ContactsComponent implements OnInit, OnDestroy {

  contactList: Contact[];
  contactSubscription: Subscription;
  constructor( private contactService: ContactService ) { // 1. connect to the service using dep injection
    console.log('Inside Constructor');
  }

  ngOnInit(): void { // lifecycle hook
    // ideal place for you to send ajax calls
    console.log('Inside ngOnInit');

    // 2. send the req to the service
    this.contactSubscription = this.contactService.getContacts()
      .subscribe( (res: Contact[]) => { // 3. get the resp from the service
        console.log(res);
        this.contactList = res;
      });
  }
  ngOnDestroy(): void{
    console.log('Into destroy');
    if (this.contactList && this.contactList.length > 0){ // fastest way to clear array
      this.contactList.length = 0;
    }
  }
}
