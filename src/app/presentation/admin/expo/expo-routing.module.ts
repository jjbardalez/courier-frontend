import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageExpoComponent } from './manage-expo/manage-expo.component';

const routes: Routes = [
  { path: '', component: ManageExpoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpoRoutingModule { }
