import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { User } from '@shared/models/user.model';
import { AccountService } from '@shared/services/account.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountComponent implements OnInit {
  user: User;

  form: FormGroup;

  constructor(private fb: FormBuilder, private accountService: AccountService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['olcay@mail.com'],
      password: ['123456'],
      displayName: ['Olcay Usta'],
    }, {updateOn: 'submit'});
    this.user = JSON.parse(localStorage.getItem('USER')) as User;
  }

  formSubmit() {
    console.log('submit!');
  }


  fileInputChange($event: Event) {
    // @ts-ignore
    this.user.avatarUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(($event.target as HTMLInputElement).files[0]));
  }
}
