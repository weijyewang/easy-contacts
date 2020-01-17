import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormGroupDirective } from '@angular/forms';
import { ApiFacadeService } from '../core/api-facade.service';
import { UtilService } from '../core/util.service';

@Component({
	selector: 'app-contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
	public form: FormGroup;

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
		this.form = this.formBuilder.group({
			firstName: [null, Validators.required],
			lastName: [null, Validators.required],
			email: [null, [Validators.required, Validators.email]],
			phone: [null, ],
		});
	}

	public addContact(formDirective: FormGroupDirective): void {
		const payload: any = {
			firstName: this.form.controls.firstName.value,
			lastName: this.form.controls.lastName.value,
			email: this.form.controls.email.value,
			phone: this.form.controls.phone.value,
		};

		this.apiFacade.httpRequestPost('contacts', payload).subscribe(response => {
			this.util.showSnackBar('Contact added successfully');
			// Reset to form to it's initial state.
			formDirective.resetForm();
			this.form.reset();
		}, response => this.util.showSnackBar('Error: failed to add contact.'));
	}
}
