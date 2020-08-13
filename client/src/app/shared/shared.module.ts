import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { OutsideClickDirective } from './directives/outside-click.directive';
import { ImgLazyLoadDirective } from '@shared/directives/img-lazy-load.directive';

@NgModule({
  declarations: [OutsideClickDirective, ImgLazyLoadDirective],
  imports: [MaterialModule],
  exports: [
    MaterialModule,
    OutsideClickDirective,
    ImgLazyLoadDirective
  ]
})
export class SharedModule {
}
