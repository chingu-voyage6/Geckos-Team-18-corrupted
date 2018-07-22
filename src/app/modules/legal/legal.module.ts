import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TermsandconditionsComponent, PrivacypolicyComponent, DisclaimerComponent]
})
export class LegalModule { }
