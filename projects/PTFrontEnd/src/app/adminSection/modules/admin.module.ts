import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from './../../shared/modules/material.module';

import { AdminDashboardComponent } from '../components/core/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from '../components/core/admin-home/admin-home.component';
import { AdminSidebarComponent } from '../components/core/admin-sidebar/admin-sidebar.component';
import { Admin404Component } from '../components/core/admin404/admin404.component';
import { ManageHotelsComponent } from '../components/feature/manage-hotels/manage-hotels.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminSidebarComponent,
    AdminHomeComponent,
    Admin404Component,
    ManageHotelsComponent,
    ],
  imports: [

  CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
