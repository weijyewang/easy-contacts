import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewContactsComponent } from './view-contacts/view-contacts.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';


const routes: Routes = [
	{ path: '', redirectTo: '/view-contacts', pathMatch: 'full' },
	{ path: 'view-contacts', component: ViewContactsComponent },
	{ path: 'add-contacts', component: AddContactsComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
