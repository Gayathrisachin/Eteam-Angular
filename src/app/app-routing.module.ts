import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { AddContactComponent } from './contacts/components/add-contact/add-contact.component';
import { ContactDetailsComponent } from './contacts/components/contact-details/contact-details.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';

// configure routes
const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'concepts', component: ConceptsComponent
  },
  {
    path: 'contacts', component: ContactsComponent
  },
  {
    path: 'contacts/add', component: AddContactComponent
  },
  {
    path: 'contacts/contact-details/id', component: ContactDetailsComponent
  },
  {
    path: 'about', component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
