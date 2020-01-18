import { Component, OnInit } from '@angular/core';
import { ApiFacadeService } from '../core/api-facade.service';
import { EcContact } from '../core/contact.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-contacts',
	templateUrl: './view-contacts.component.html',
	styleUrls: ['./view-contacts.component.scss']
})
export class ViewContactsComponent implements OnInit {
	public contacts: EcContact[] = [];

	constructor(
		private apiFacade: ApiFacadeService,
		private router: Router,
	) { }

	ngOnInit() {
		this.loadContactList();
	}

	private loadContactList(): void {
		const params = { _sort: 'firstName' };
		this.apiFacade.httpRequestGet('contacts', params).subscribe(responseData => {
			this.contacts = responseData;
		}, errorResponse => {

		});
	}

	public navigateToAddContact(): void {
		this.router.navigate(['/add-contacts']);
	}

	public getInitials(contactUser: EcContact): string {
		const initials = contactUser.firstName.charAt(0) + contactUser.lastName.charAt(0)
		return initials.toUpperCase();
	}

	public trackByFn(index, item) {
		return index; // or item.id
	}
}
