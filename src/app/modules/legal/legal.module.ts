import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisclaimerComponent } from '@legal/components/disclaimer/disclaimer.component';
import { PrivacyPolicyComponent } from '@legal/components/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from '@legal/components/terms-and-conditions/terms-and-conditions.component';
import { RoutingModule } from '@legal/routing/routing.module';
import { MaterialModule } from '@material/material.module';

@NgModule({
  imports: [CommonModule, RoutingModule, MaterialModule],
  declarations: [
    DisclaimerComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent
  ]
})
export class LegalModule {}
