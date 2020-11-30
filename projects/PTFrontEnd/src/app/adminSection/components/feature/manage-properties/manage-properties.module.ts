import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagePropertiesRoutingModule } from './manage-properties-routing.module';
import { ManagePropertiesComponent } from './manage-properties.component';


@NgModule({
  declarations: [
    ManagePropertiesComponent
  ],
  imports: [
    CommonModule,
    ManagePropertiesRoutingModule
  ]
})
export class ManagePropertiesModule { }
