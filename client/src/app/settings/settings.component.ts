import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';
import { Router } from '@angular/router';

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnInit {

  constructor(private dialog: MatDialog, private router: Router) {
  }

  ngOnInit() {
    const dialogRef = this.dialog.open(SettingsDialogComponent, {
      autoFocus: false,
      minWidth: 896,
      panelClass: 'settings-dialog'
    });

    dialogRef.afterClosed().subscribe(async value => {
      await this.router.navigateByUrl('/');
    });
  }
}
