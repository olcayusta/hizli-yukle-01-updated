import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private swUpdate: SwUpdate, private snackBar: MatSnackBar) {
    this.swUpdate.available.subscribe(evt => {
      const snack = this.snackBar.open('Güncelleme var!', 'YENİLE');
      snack.onAction().subscribe(() => {
        window.location.reload();
      });
    });
  }
}
