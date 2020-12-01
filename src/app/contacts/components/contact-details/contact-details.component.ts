import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../../model/contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: [
  ]
})
export class ContactDetailsComponent implements OnInit {
  contactData: Contact;
  isUpdated: boolean;
  duplicateContactData: Contact;
  constructor(private contactService: ContactService, private route: ActivatedRoute) {
    console.log('Inside constructor');
  }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
    // todo: Read URL Parameter in Angular
    const contactId = this.route.snapshot.paramMap.get('id');
    this.contactService.getContactById(contactId)
      .subscribe((res: any) => {
        console.log(res);
        this.contactData = res;
      });
  }

  editModalOpenHandler(): void {
    this.duplicateContactData = JSON.parse(JSON.stringify(this.contactData));
  }

  updateContactHandler(): void {
    console.log(this.duplicateContactData);

    this.contactService.updateContact(this.duplicateContactData)
    .subscribe((res: any) => {
      console.log(res);
      if (res && res.id ){
        this.isUpdated = true;
        this.contactData = res;
      }
    });
  }
}
