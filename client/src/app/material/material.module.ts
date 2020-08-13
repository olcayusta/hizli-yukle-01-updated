import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [],
  exports: [
    MatButtonModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatListModule,
    MatTooltipModule
  ]
})
export class MaterialModule {
}
