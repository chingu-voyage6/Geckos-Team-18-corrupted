import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'src/app/modules/core/components/home';
import { LoginComponent } from 'src/app/modules/core/components/login';
import { RegisterComponent } from 'src/app/modules/core/components/register';
import { AuthGuard } from 'src/app/modules/core/components/_guards';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const RoutingModule = RouterModule.forRoot(appRoutes);
