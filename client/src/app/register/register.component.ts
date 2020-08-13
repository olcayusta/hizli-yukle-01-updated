import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    }, {updateOn: 'submit'});
  }

  formSubmit() {
    if (this.registerForm.valid) {
      const {email, password} = this.registerForm.value;
      this.authService.register(email, password).subscribe(value => {
        alert('Uyelik olusturuldu!');
      });
    }
  }

}
