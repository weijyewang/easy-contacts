import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

const snackBarDuration = 7000;

@Injectable({
	providedIn: 'root',
})
export class UtilService {
	constructor(
		private snackBar: MatSnackBar,
	) {

	}

	/**
	 * Trigger a snack bar to show on top.
	 * @param message Message to be shown in the snack bar.
	 * @param duration Duration in milliseconds for how long the snack bar show stick around before it dissappear.
	 */
	public showSnackBar(message: string, duration?: number): void {
		this.snackBar.open(message, 'Close', {
			duration: duration || snackBarDuration,
			verticalPosition: 'top',
		});
	}
}
