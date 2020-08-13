import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavDrawerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
