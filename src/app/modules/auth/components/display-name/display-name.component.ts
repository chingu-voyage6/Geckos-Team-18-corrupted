import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '@auth/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';

@Component({
  selector: 'app-display-name',
  templateUrl: './display-name.component.html',
  styleUrls: ['./display-name.component.css']
})
export class DisplayNameComponent implements OnInit {
  displayNameForm: FormGroup;
  user: User;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.displayNameForm = this.fb.group({
      displayName: ['', [Validators.required]]
    });
    this.user = this.route.snapshot.data.user;
    this.displayName.setValue(this.user.displayName);
  }

  get displayName() {
    return this.displayNameForm.get('displayName');
  }

  save() {
    this.authService
      .updateUser(this.user, { displayName: this.displayName.value })
      .then(() => {
        this.router.navigate(['/collections']);
      });
  }
}
