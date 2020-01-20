import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-add-contacts',
	templateUrl: './add-contacts.component.html',
	styleUrls: ['./add-contacts.component.scss']
})
export class AddContactsComponent implements OnInit {

	constructor(
		private router: Router,
	) { }

	ngOnInit() {
	}

	public onCancel(): void {
		this.router.navigate(['/view-contacts']);
	}

	public onNewContactAdded(): void {
		this.router.navigate(['/view-contacts']);
	}
}
