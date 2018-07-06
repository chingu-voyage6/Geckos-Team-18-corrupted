import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../auth/guards/auth.guard';

import { LayoutTestComponent } from '../components/layout-test/layout-test.component';

export const routes: Routes = [
  {
    path: 'home',
    component: LayoutTestComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class RoutingModule {}
