import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CameraAltIconComponent } from './camera-alt-icon/camera-alt-icon.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [AccountComponent, CameraAltIconComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
    MaterialModule,
    MatExpansionModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AccountModule {
}
