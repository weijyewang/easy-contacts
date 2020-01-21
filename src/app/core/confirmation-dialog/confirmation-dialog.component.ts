import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject, Component } from '@angular/core';

@Component({
	selector: 'app-confirmation-dialog',
	template: `
    <div>
    	<div>{{ message }}</div>
    	<div class="danger-color">This action cannot be undone</div>
    	<div class="flex-row flex-justify-content-end" style="margin-top: 20px">
    		<button mat-button class="ec-button" style="margin-right: 10px;" (click)="onCancelClick()">Cancel</button>
    		<button mat-button class="ec-button primary" (click)="onConfirmClick()">Confirm</button>
    	</div>
    </div>`,
	styles: [],
})
export class ConfirmationDialogComponent {
	constructor(
		public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public message: any,
	) {

	}

	public onCancelClick(): void {
		this.dialogRef.close();
	}

	public onConfirmClick(): void {
		this.dialogRef.close(true);
	}
}