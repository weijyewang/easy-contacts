import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ViewContactsService {
	private contactFormEditSavedSource = new Subject<void>();
	private favouriteToggledSource = new Subject<void>();

	public contactFormEditSaved$ = this.contactFormEditSavedSource.asObservable();
	public favouriteToggled$ = this.favouriteToggledSource.asObservable();

	constructor() {

	}

	public triggerContactFormEditSavedEvent(): void {
		this.contactFormEditSavedSource.next();
	}

	public triggerFavouriteToggledEvent(): void {
		this.favouriteToggledSource.next();
	}
}