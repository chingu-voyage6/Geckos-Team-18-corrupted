import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { fakeBackendProvider } from './modules/core/components/_helpers';

import { environment } from '../environments/environment';

import { RoutingModule } from './routing/routing.module';
import { CoreModule } from './modules/core/core.module';

import { AppComponent } from './modules/core/components/app/app.component';

import { AlertComponent } from './modules/core/components/_directives';
import { AuthGuard } from './modules/core/components/_guards';
import { JwtInterceptor, ErrorInterceptor } from './modules/core/components/_helpers';
import { AlertService, AuthenticationService, UserService } from './modules/core/components/_services';
import { HomeComponent } from './modules/core/components/home';
import { LoginComponent } from './modules/core/components/login';
import { RegisterComponent } from './modules/core/components/register';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
        ],
  bootstrap: [AppComponent]
})
export class AppModule {}
