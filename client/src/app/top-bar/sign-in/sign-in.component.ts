import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { AuthService } from '@shared/services/auth.service';
import { DOCUMENT } from '@angular/common';
import GoogleAuth = gapi.auth2.GoogleAuth;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit, AfterViewInit {
  googleAuth: GoogleAuth;

  @ViewChild('signInButton', {read: ElementRef, static: false}) signInButton: ElementRef<MatButton>;

  constructor(@Inject(DOCUMENT) private document: Document, private authService: AuthService) {
  }

  ngAfterViewInit(): void {
    // this.gapiLoad(this.signInButton.nativeElement);
  }

  ngOnInit() {
  }

  gapiLoad(container) {
    gapi.load('auth2', () => {
      this.googleAuth = gapi.auth2.init({
        ux_mode: 'popup',
        client_id: '471440911060-rl9e80le54u8q5jf6ibjlbs6auqlo52o.apps.googleusercontent.com'
      });

      this.googleAuth.attachClickHandler(container, {}, (googleUser) => {
        const displayName = googleUser.getBasicProfile().getName();
        const email = googleUser.getBasicProfile().getEmail();
        const avatarUrl = googleUser.getBasicProfile().getImageUrl();

        this.authService.updateUser({
          displayName, email, avatarUrl
        });

        window.location.reload();
      }, (error: any) => {
        console.log(error);
      });
    });
  }
}
