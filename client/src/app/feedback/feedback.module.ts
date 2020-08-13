import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackComponent } from './feedback.component';
import { MaterialModule } from '../material/material.module';
import { FeedbackDialogComponent } from './feedback-dialog/feedback-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [FeedbackComponent, FeedbackDialogComponent],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    MaterialModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FeedbackModule {
}
