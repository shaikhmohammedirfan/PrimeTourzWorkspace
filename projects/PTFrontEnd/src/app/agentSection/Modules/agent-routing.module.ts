import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentDashboardComponent } from '../CoreComponents/agent-dashboard/agent-dashboard.component';
import { ComponentFixture } from '@angular/core/testing';
import { HotelsComponent } from '../CoreComponents/hotels/hotels.component';

const agentRoutes: Routes = [
  { path: '', component: AgentDashboardComponent},
  { path: 'contact', component: HotelsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(agentRoutes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
