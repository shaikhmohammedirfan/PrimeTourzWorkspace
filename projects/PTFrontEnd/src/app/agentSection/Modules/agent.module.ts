import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { AgentDashboardComponent } from '../CoreComponents/agent-dashboard/agent-dashboard.component';
import { HeaderFooterModule } from '../../shared/modules/header-footer.module';
import { HotelsComponent } from '../CoreComponents/hotels/hotels.component';


@NgModule({
  declarations: [AgentDashboardComponent, HotelsComponent],
  imports: [
    CommonModule,
    AgentRoutingModule,
    HeaderFooterModule
  ]
})
export class AgentModule { }
