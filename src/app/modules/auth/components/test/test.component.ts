import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  signupForm: FormGroup;
  detailForm: FormGroup;
  passwordHidden: boolean = true;

  constructor(private fb: FormBuilder, private auth: AuthService) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          Validators.minLength(6),
          Validators.maxLength(25)
        ]
      ]
    });

    this.detailForm = this.fb.group({
      displayName: [['', [Validators.required]]]
    });
  }

  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get displayName() {
    return this.detailForm.get('displayName');
  }

  signup() {
    return this.auth.emailSignUp(this.email.value, this.password.value);
  }

  setDisplayName(user) {
    return this.auth.updateUser(user, { displayName: this.displayName.value });
  }

  getEmailErrorMessage() {
    return this.email.hasError('required')
      ? 'You must enter a value'
      : this.email.hasError('email')
        ? 'Not a valid email'
        : '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required')
      ? 'You must enter a value'
      : this.password.hasError('pattern')
        ? 'Password must be between 6 and 24 characters and contain at least one number'
        : '';
  }
}
