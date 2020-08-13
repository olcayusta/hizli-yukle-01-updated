import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '@shared/models/user.model';
import { AuthService } from '@shared/services/auth.service';

@Component({
  selector: 'app-avatar-popup',
  templateUrl: './avatar-popup.component.html',
  styleUrls: ['./avatar-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarPopupComponent implements OnInit {
  @Input() user: User;
  @Output() closePopup = new EventEmitter();

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  signOut() {
    this.authService.signOut();
  }
}
