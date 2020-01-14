import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewContactsComponent } from './view-contacts/view-contacts.component';


const routes: Routes = [
	{ path: 'viewContacts', component: ViewContactsComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
