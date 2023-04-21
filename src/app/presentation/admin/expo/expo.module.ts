import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpoRoutingModule } from './expo-routing.module';
import { ManageExpoComponent } from './manage-expo/manage-expo.component';
import { GeneralDataComponent } from './manage-expo/components/general-data/general-data.component';
import { SenderDataComponent } from './manage-expo/components/sender-data/sender-data.component';
import { RecipientDataComponent } from './manage-expo/components/recipient-data/recipient-data.component';
import { PacketDataComponent } from './manage-expo/components/packet-data/packet-data.component';
import { PaymentDataComponent } from './manage-expo/components/payment-data/payment-data.component';
import { SharedModule } from 'src/app/common/shared/shared.module';


@NgModule({
  declarations: [
    ManageExpoComponent,
    GeneralDataComponent,
    SenderDataComponent,
    RecipientDataComponent,
    PacketDataComponent,
    PaymentDataComponent
  ],
  imports: [
    CommonModule,
    ExpoRoutingModule,
    SharedModule
  ]
})
export class ExpoModule { }
