import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ DisclaimerComponent, PrivacyPolicyComponent, TermsAndConditionsComponent]
})
export class LegalModule { }
