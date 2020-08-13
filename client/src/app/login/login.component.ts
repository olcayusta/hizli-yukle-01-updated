import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['olcay@mail.com', [Validators.required, Validators.email]],
      password: ['12345678', [Validators.required, Validators.minLength(8)]]
    }, {updateOn: 'submit'});
  }

  formSubmit() {
    this.submitted = true;
    const {email, password} = this.loginForm.value;
    this.authService.login(email, password).subscribe(user => {
      this.submitted = false;
      this.cdr.markForCheck();
    });
  }
}
