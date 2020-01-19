import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { ViewContactsComponent } from './view-contacts/view-contacts.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NullConverterPipe } from './core/null-converter.pipe';
import { SearchPipe } from './core/search.pipe';
import { CategoryFilterPipe } from './view-contacts/category-filter.pipe';
import { InfoDialogComponent } from './view-contacts/info-dialog/info-dialog.component';
import { ViewContactsService } from './view-contacts/view-contacts.service';

@NgModule({
	declarations: [
		AppComponent,
		ViewContactsComponent,
		AddContactsComponent,
		HeaderComponent,
		ContactFormComponent,
		NullConverterPipe,
		SearchPipe, CategoryFilterPipe,
		InfoDialogComponent,
	],
	imports: [
		BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule,
		FormsModule, ReactiveFormsModule, MatSnackBarModule, MatTooltipModule,
		MatButtonModule, MatInputModule, MatFormFieldModule, MatDialogModule,
	],
	entryComponents: [
		InfoDialogComponent,
	],
	providers: [
		ViewContactsService,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
