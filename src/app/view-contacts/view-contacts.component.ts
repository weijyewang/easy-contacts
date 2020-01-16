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
		this.apiFacade.httpRequestGet('contacts').subscribe(responseData => {
			this.contacts = responseData;
		}, errorResponse => {

		});
	}

	public navigateToAddContact(): void {
		this.router.navigate(['/add-contacts']);
	}
}
