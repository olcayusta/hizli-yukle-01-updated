import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FeedbackService } from '@shared/services/feedback.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedbackDialogComponent implements OnInit {
  msgControl = new FormControl();

  constructor(
    private dialogRef: MatDialogRef<FeedbackDialogComponent>, private feedbackService: FeedbackService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.dialogRef.afterClosed().subscribe(value => {
      if (value) {
        this.feedbackService.send(value).subscribe(feedback => {
          this.snackBar.open('Mesaj gonderildi');
        });
      }
    });
  }
}
