import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../../model/contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: [
  ]
})
export class AddContactComponent implements OnInit {
  //  Step 1: Create HTML tag equivalent in ts
  addContactForm: FormGroup;
  isSaved = false;
  constructor(private router: Router, private contactService: ContactService) { }

  ngOnInit(): void {
    // Step 1:Continues
    this.addContactForm = new FormGroup({
      //  Step 2: Create HTML input equivalent in ts
      name: new FormControl('', Validators.required),  // Step 5:Work on validations
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),

    });
  }

  onClick(): void {
    this.router.navigate(['/contacts']);
  }

  async addContactHandler(): Promise<void> {
    console.log(this.addContactForm.value);

    // 2. send the above data to the service
    const status: Contact = await this.contactService.createContact(this.addContactForm.value);
    console.log(status);
    if (status && status.id) {
      this.isSaved = true;
    }

  }

}
