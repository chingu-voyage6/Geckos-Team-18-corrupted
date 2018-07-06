import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

import { RoutingModule } from './routing/routing.module';
import { MaterialModule } from '../material/material.module';

import { AuthService } from './services/auth.service';

import { TestComponent } from './components/test/test.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RoutingModule, MaterialModule],
  declarations: [TestComponent],
  providers: [AuthService, AngularFireAuth, AngularFirestore]
})
export class AuthModule {}
