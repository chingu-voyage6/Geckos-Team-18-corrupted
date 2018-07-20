import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../auth/guards/auth.guard';
import { UserGuard } from '../../auth/guards/user.guard';

import { LandingComponent } from '../components/landing/landing.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: LandingComponent
  },
  {
    path: 'collections',
    loadChildren: '../../collection/collection.module#CollectionModule',
    resolve: {
      user: UserGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, UserGuard]
})
export class RoutingModule {}
