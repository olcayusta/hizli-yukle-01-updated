import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LinkIconComponent } from '../icon/link-icon/link-icon.component';
import { BBCodePipe } from './pipes/bbcode.pipe';
import { HtmlCodePipe } from './pipes/html-code.pipe';
import { MarkdownCodePipe } from './pipes/markdown-code.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { IconModule } from '../icon/icon.module';

import { MaterialModule } from '../material/material.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { DeleteIconComponent } from './icons/delete-icon/delete-icon.component';
import { MatRippleModule } from '@angular/material/core';
import { SharedModule } from '@shared/shared.module';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    PostComponent,
    LinkIconComponent,
    DeleteIconComponent,
    DeleteDialogComponent,
    BBCodePipe,
    HtmlCodePipe,
    MarkdownCodePipe,
    SafeUrlPipe,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    MaterialModule,
    MatRippleModule,
    ClipboardModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    IconModule,
    SharedModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ]
})
export class PostModule {
}
