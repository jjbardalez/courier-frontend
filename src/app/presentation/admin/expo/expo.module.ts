import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpoRoutingModule } from './expo-routing.module';
import { GeneralDataComponent } from './manage-expo/courier-guide/components/general-data/general-data.component';
import { SenderDataComponent } from './manage-expo/courier-guide/components/sender-data/sender-data.component'; 
import { RecipientDataComponent } from './manage-expo/courier-guide/components/recipient-data/recipient-data.component';
import { PacketDataComponent } from './manage-expo/courier-guide/components/packet-data/packet-data.component'; 
import { PaymentDataComponent } from './manage-expo/courier-guide/components/payment-data/payment-data.component';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { CourierGuideComponent } from './manage-expo/courier-guide/courier-guide.component';
import { ManifestComponent } from './manage-expo/manifest/manifest.component';
import { BillingComponent } from './manage-expo/billing/billing.component';
import { CreditsComponent } from './manage-expo/credits/credits.component';

@NgModule({
  declarations: [
    GeneralDataComponent,
    SenderDataComponent,
    RecipientDataComponent,
    PacketDataComponent,
    PaymentDataComponent,
    CourierGuideComponent,
    ManifestComponent,
    BillingComponent,
    CreditsComponent
  ],
  imports: [
    CommonModule,
    ExpoRoutingModule,
    SharedModule
  ],
})
export class ExpoModule { }
