import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpRoutingModule } from './help-routing.module';
import { HelpComponent } from './help.component';
import { SharedModule } from '@shared/shared.module';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [HelpComponent],
  imports: [
    CommonModule,
    HelpRoutingModule,
    SharedModule,
    MatExpansionModule
  ]
})
export class HelpModule {
}
