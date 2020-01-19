import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ViewContactsService {
	private contactFormEditSavedSource = new Subject<void>();

	public contactFormEditSavedSource$ = this.contactFormEditSavedSource.asObservable();

	constructor() {

	}

	public triggerContactFormEditSavedEvent(): void {
		this.contactFormEditSavedSource.next();
	}
}