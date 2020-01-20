import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormGroupDirective } from '@angular/forms';
import { ApiFacadeService } from '../core/api-facade.service';
import { UtilService } from '../core/util.service';
import { EcContact } from '../core/contact.model';

@Component({
	selector: 'app-contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
	public form: FormGroup;

	@Input() editMode: boolean = false;
	@Input() selectedContact: EcContact;
	@Output() onCancel: EventEmitter<void> = new EventEmitter<void>();
	@Output() onEditSaved: EventEmitter<void> = new EventEmitter<void>();
	@Output() onNewContactAdded: EventEmitter<void> = new EventEmitter<void>();

	constructor(
		private formBuilder: FormBuilder,
		private apiFacade: ApiFacadeService,
		private util: UtilService,
	) { }

	ngOnInit() {
		this.createForm();
	}

	private createForm(): void {
		/*
		 * These fields are the basic fields.
		 * 1.	name - is required
		 * 2.	email - is required
		 * 3.	phone - optional
		 */
		if (this.editMode) { // Populate selected contact data as defaut value.
			this.form = this.formBuilder.group({
				firstName: [this.selectedContact.firstName, Validators.required],
				lastName: [this.selectedContact.lastName, Validators.required],
				email: [this.selectedContact.email, [Validators.required, Validators.email]],
				phone: [this.selectedContact.phone,],
			});
		} else  {
			this.form = this.formBuilder.group({
				firstName: [null, Validators.required],
				lastName: [null, Validators.required],
				email: [null, [Validators.required, Validators.email]],
				phone: [null,],
			});
		}
	}

	public addContact(formDirective: FormGroupDirective): void {
		const payload: any = {
			firstName: this.form.controls.firstName.value,
			lastName: this.form.controls.lastName.value,
			email: this.form.controls.email.value,
			phone: this.form.controls.phone.value,
			favourite: false,
		};

		this.apiFacade.httpRequestPost('contacts', payload).subscribe(response => {
			this.util.showSnackBar('Contact added successfully');
			// Reset to form to it's initial state.
			formDirective.resetForm();
			this.form.reset();
			this.onNewContactAdded.emit();
		}, response => this.util.showSnackBar('Error: failed to add contact.'));
	}

	public saveEditedContact(formDirective: FormGroupDirective): void {
		const payload: any = {
			firstName: this.form.controls.firstName.value,
			lastName: this.form.controls.lastName.value,
			email: this.form.controls.email.value,
			phone: this.form.controls.phone.value,
			favourite: this.selectedContact.favourite,
		};

		this.apiFacade.httpRequestPut(`contacts/${this.selectedContact.id}`, payload).subscribe(response => {
			this.util.showSnackBar('Contact info has been updated');
			// Reset to form to it's initial state.
			formDirective.resetForm();
			this.form.reset();
			this.onEditSaved.emit();
		}, response => this.util.showSnackBar('Error: failed to edit contact.'));
	}

	public cancel(): void {
		if (this.form.dirty) {
			const result = confirm('You have unsaved changes on this page. Do you want to leave and discard your changes?');

			if (result) {
				this.onCancel.emit();
			}
		} else  {
			this.onCancel.emit();
		}
	}
}
