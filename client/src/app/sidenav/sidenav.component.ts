import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
  @Output() closeSidenav = new EventEmitter();

  constructor(private router: Router) {
  }

  async openFeedbackDialog() {
    await this.router.navigateByUrl('/feedback');
  }

  async openSettingsDialog() {
    await this.router.navigateByUrl('/settings');
  }
}
