import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from 'angularfire2';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';

import { CoreModule } from './modules/core/core.module';
import { AuthModule } from './modules/auth/auth.module';

import { AppComponent } from './modules/core/components/app/app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule,
    CoreModule,
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
