import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@auth/guards/auth.guard';
import { UserGuard } from '@auth/guards/user.guard';

import { LandingComponent } from '@core/components/landing/landing.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: LandingComponent
  },
  {
    path: 'collections',
    loadChildren: '@collection/collection.module#CollectionModule',
    canActivate: [AuthGuard],
    resolve: {
      user: UserGuard
    }
  },
  {
    path: 'legal',
    loadChildren: '../../legal/legal.module#LegalModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, UserGuard]
})
export class RoutingModule {}
