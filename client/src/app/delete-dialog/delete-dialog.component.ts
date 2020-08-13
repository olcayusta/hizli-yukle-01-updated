import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ImageService } from '@shared/services/image.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    private imageService: ImageService,
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.imageService.deleteImage(this.data.postId).subscribe(image => {
          this.snackBar.open('Resim silindi', 'KAPAT');
        });
      }
    });
  }
}
