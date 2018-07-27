import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DisclaimerComponent } from '@legal/components/disclaimer/disclaimer.component';
import { PrivacyPolicyComponent } from '@legal/components/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from '@legal/components/terms-and-conditions/terms-and-conditions.component';

export const routes: Routes = [
  {
    path: 'disclaimer',
    component: DisclaimerComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
