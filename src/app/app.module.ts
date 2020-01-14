import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewContactsComponent } from './view-contacts/view-contacts.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
	declarations: [
		AppComponent,
		ViewContactsComponent,
		AddContactsComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
