import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotifierComponent } from './../shared/components/notifier/notifier.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackbar: MatSnackBar) { }

  showNotification(displayMessage: string, btnText: string, messageType: 'error' | 'success'): void {
    this.snackbar.openFromComponent(NotifierComponent, {
      data: {
        message: displayMessage,
        buttonText: btnText,
        type: messageType
      },
      // 5000 means 5 seconds
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: messageType
    });
  }
}
