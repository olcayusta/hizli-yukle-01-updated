import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FeedbackDialogComponent } from './feedback-dialog/feedback-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedbackComponent implements OnInit {

  constructor(private dialog: MatDialog, private router: Router) {
  }

  ngOnInit() {
    const dialogRef = this.dialog.open(FeedbackDialogComponent, {
      autoFocus: false,
      minWidth: 768
    });

    dialogRef.afterClosed().subscribe(async value => {
      await this.router.navigateByUrl('/');
    });
  }
}
