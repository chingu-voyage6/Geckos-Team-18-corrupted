import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';

import { RoutingModule } from './routing/routing.module';



@NgModule({
  imports: [
    CommonModule, RoutingModule
  ],
  declarations: [ DisclaimerComponent, PrivacyPolicyComponent, TermsAndConditionsComponent]
})
export class LegalModule { }
