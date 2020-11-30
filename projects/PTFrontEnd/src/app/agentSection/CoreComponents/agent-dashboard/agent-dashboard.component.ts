import { Component, OnInit } from '@angular/core';
import { globals } from '../../../shared/others/globals';

@Component({
  selector: 'app-agent-dashboard',
  templateUrl: './agent-dashboard.component.html',
  styleUrls: ['./agent-dashboard.component.scss']
})
export class AgentDashboardComponent implements OnInit {
ev = globals;
  constructor() {
    this.ev.MenuItem7 = 'contact';
   }

  ngOnInit(): void {
  }

}
