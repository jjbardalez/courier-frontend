import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourierGuideComponent } from './manage-expo/courier-guide/courier-guide.component';
import { ManifestComponent } from './manage-expo/manifest/manifest.component';
import { BillingComponent } from './manage-expo/billing/billing.component';
import { CreditsComponent } from './manage-expo/credits/credits.component';

const routeGuideCourier = 'guide-courier'

const routes: Routes = [
  {
    path: '',
    redirectTo: routeGuideCourier
  },
  { path: routeGuideCourier, component: CourierGuideComponent },
  { path: 'manifest', component: ManifestComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'credits', component: CreditsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpoRoutingModule { }
