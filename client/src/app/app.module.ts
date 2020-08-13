import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';
import { IconModule } from './icon/icon.module';

import { SidenavContainerComponent } from './sidenav-container/sidenav-container.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FileDropComponent } from './file-drop/file-drop.component';
import { AvatarPopupComponent } from './top-bar/avatar-popup/avatar-popup.component';
import { SignInComponent } from './top-bar/sign-in/sign-in.component';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';

import { BlockScrollStrategy, Overlay, OverlayModule } from '@angular/cdk/overlay';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@environment/environment';

import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MAT_MENU_SCROLL_STRATEGY } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

function scrollFactory(overlay: Overlay): () => BlockScrollStrategy {
  return () => overlay.scrollStrategies.block();
}

@NgModule({
  declarations: [
    AppComponent,
    SidenavContainerComponent,
    SidenavComponent,
    HomeComponent,
    TopBarComponent,
    FileDropComponent,
    AvatarPopupComponent,
    SignInComponent,
    NavDrawerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    MatSidenavModule,
    MatToolbarModule,
    OverlayModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    IconModule
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 3000}},
    {provide: MAT_MENU_SCROLL_STRATEGY, useFactory: scrollFactory, deps: [Overlay]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
