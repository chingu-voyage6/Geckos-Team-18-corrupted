import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '@auth/components/login/login.component';
import { RegisterComponent } from '@auth/components/register/register.component';
import { ProfileComponent } from '@auth/components/profile/profile.component';
import { DisplayNameComponent } from '@auth/components/display-name/display-name.component';
import { UserGuard } from '@auth/guards/user.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'display-name',
    component: DisplayNameComponent,
    resolve: {
      user: UserGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UserGuard]
})
export class RoutingModule {}
