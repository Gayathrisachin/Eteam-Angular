import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: [
  ]
})
export class AddContactComponent implements OnInit {
  //  Step 1: Create HTML tag equivalent in ts
addContactForm: FormGroup;
  constructor(private router: Router) { }

  ngOnInit(): void {
    // Step 1:Continues
    this.addContactForm = new FormGroup({
      //  Step 2: Create HTML input equivalent in ts
      name: new FormControl('', Validators.required),  // Step 5:Work on validations
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),

    });
  }

  onClick(): void{
  this.router.navigate(['/contacts']);
  }

  addContactHandler(): void{
    alert('submitted');
    console.log(this.addContactForm.value);
  }
}
