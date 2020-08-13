import { NgModule } from '@angular/core';
import { HomeIconComponent } from './home-icon/home-icon.component';
import { FeedbackIconComponent } from './feedback-icon/feedback-icon.component';
import { SettingsIconComponent } from './settings-icon/settings-icon.component';
import { HelpIconComponent } from './help-icon/help-icon.component';
import { MenuIconComponent } from './menu-icon/menu-icon.component';
import { PhotoLibraryIconComponent } from './photo-library-icon/photo-library-icon.component';
import { ExitToAppIconComponent } from './exit-to-app-icon/exit-to-app-icon.component';

@NgModule({
  declarations: [
    HomeIconComponent,
    FeedbackIconComponent,
    SettingsIconComponent,
    HelpIconComponent,
    MenuIconComponent,
    PhotoLibraryIconComponent,
    ExitToAppIconComponent
  ],
  exports: [
    HomeIconComponent,
    FeedbackIconComponent,
    SettingsIconComponent,
    HelpIconComponent,
    MenuIconComponent,
    PhotoLibraryIconComponent,
    ExitToAppIconComponent
  ]
})
export class IconModule {
}
