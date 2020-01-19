import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EcContact } from 'src/app/core/contact.model';
import { ViewContactsService } from '../view-contacts.service';

interface DialogData {
	editMode?: boolean;
	selectedContact?: EcContact;
}

@Component({
	selector: 'app-info-dialog',
	styleUrls: ['./info-dialog.component.scss'],
	templateUrl: './info-dialog.component.html',
})
export class InfoDialogComponent {

	constructor(
		private viewContactsService: ViewContactsService,
		public dialogRef: MatDialogRef<InfoDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: DialogData) {

		}

	public closeDialog(): void {
		this.dialogRef.close();
	}

	public onFormSaved(): void {
		this.viewContactsService.triggerContactFormEditSavedEvent();
		this.closeDialog();
	}
}
