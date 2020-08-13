import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import { AuthService } from '@shared/services/auth.service';
import { BlockScrollStrategy, Overlay } from '@angular/cdk/overlay';
import { User } from '@shared/models/user.model';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent implements OnInit {
  @Output() openSidenav = new EventEmitter();

  isOpen: boolean;

  scrolBlockStrategy: BlockScrollStrategy;

  user: User;

  constructor(private authService: AuthService, private overlay: Overlay) {
    this.scrolBlockStrategy = overlay.scrollStrategies.block();
  }

  ngOnInit() {
    this.user = this.authService.currentUserValue;
  }

  outSideClick() {
    this.isOpen = false;
  }
}
