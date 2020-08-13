import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';
import { MaterialModule } from '../material/material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [SettingsComponent, SettingsDialogComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MaterialModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class SettingsModule {
}
