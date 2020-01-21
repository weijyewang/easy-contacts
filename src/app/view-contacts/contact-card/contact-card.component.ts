import { Component, OnInit, Input } from '@angular/core';
import { EcContact } from 'src/app/core/contact.model';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiFacadeService } from 'src/app/core/api-facade.service';
import { ViewContactsService } from '../view-contacts.service';
import { UtilService } from 'src/app/core/util.service';
import { ConfirmationDialogComponent } from 'src/app/core/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  @Input() contact: EcContact;

  constructor(
    private matDialog: MatDialog,
    private apiFacade: ApiFacadeService,
    private viewContactsService: ViewContactsService,
    private util: UtilService,
  ) { }

  ngOnInit() {
  }

  public getInitials(contactUser: EcContact): string {
    const initials = contactUser.firstName.charAt(0) + contactUser.lastName.charAt(0)
    return initials.toUpperCase();
  }

  public trackByFn(index, item) {
    return index; // or item.id
  }

  public toggleFavourite(contact: EcContact): void {
    contact.favourite = !contact.favourite;
    this.apiFacade.httpRequestPut(`contacts/${contact.id}`, contact).subscribe(responseData => {
      this.viewContactsService.triggerFavouriteToggledEvent();
    });
  }

  public triggerDialog(editMode: boolean, selectedContact?: EcContact): void {
    const dialogOptions: any = {
      panelClass: ['ec-dialog'],
      maxHeight: '100vh',
      autoFocus: false,
      data: {
        editMode: editMode ? true : false,
      },
    };
    if (selectedContact) {
      dialogOptions.data.selectedContact = selectedContact;
    }
    const dialogRef = this.matDialog.open(InfoDialogComponent, dialogOptions);
  }

  public deleteContact(contact: EcContact): void {
    const dialogOptions: any = {
      panelClass: ['ec-dialog'],
      maxHeight: '100vh',
      autoFocus: false,
      data: 'Are you sure you want to delete this contact?',
    };
   
    const dialogRef = this.matDialog.open(ConfirmationDialogComponent, dialogOptions);
    dialogRef.afterClosed().subscribe(result => {
      if (result) { // Call delete request if user clicked confirm.
        this.apiFacade.httpRequestDelete(`contacts/${this.contact.id}`).subscribe(response => {
          this.util.showSnackBar(`Contact ${contact.firstName} has been deleted.`);
          this.viewContactsService.triggerContactDeletedEvent();
        }, errorResponse => this.util.showSnackBar('Error: failed to delete contact.'));
      }
    });
  }
}
