import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-sidenav-container',
  templateUrl: './sidenav-container.component.html',
  styleUrls: ['./sidenav-container.component.scss']
})
export class SidenavContainerComponent {

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  openedStart() {
    this.document.body.style.overflowY = 'hidden';
  }

  closedStart() {
    this.document.body.style.overflowY = '';
  }
}
