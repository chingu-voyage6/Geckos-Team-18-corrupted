import { Component, OnInit } from '@angular/core';
import { User } from '@auth/models/user.model';
import { Observable } from 'rxjs';
import { AuthService } from '@auth/services/auth.service';

@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.css']
})
export class ProfileButtonComponent implements OnInit {
  user: Observable<User>;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user = this.authService.user;
  }

  getGravatarImage(uid: string): string {
    return `http://www.gravatar.com/avatar/${uid}?s=48&d=identicon`;
  }

  signOut() {
    return this.authService.signOut();
  }
}
