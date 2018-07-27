import { Component, OnInit, Input, Injectable } from '@angular/core';
import { AuthService } from '@auth/services/auth.service';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '@auth/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Observable<User>;
  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.user = this.auth.user;
  }

  currentUser() {
    return this.auth.getUser(this.user);
  }

  signOut() {
    return this.auth.signOut();
  }
}
