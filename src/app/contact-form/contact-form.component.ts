import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
	public form: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
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
		});
	}

}
