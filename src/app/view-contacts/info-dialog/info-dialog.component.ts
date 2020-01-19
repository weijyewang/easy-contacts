import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-info-dialog',
	styleUrls: ['./info-dialog.component.scss'],
	templateUrl: './info-dialog.component.html',
})
export class InfoDialogComponent {

	constructor(
		public dialogRef: MatDialogRef<InfoDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any) { }

	closeDialog(): void {
		this.dialogRef.close();
	}

}
