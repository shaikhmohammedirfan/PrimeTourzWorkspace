import { Component, OnInit } from '@angular/core';
import { globals } from '../../others/globals';

@Component({
  selector: 'app-header-scroll',
  templateUrl: './header-scroll.component.html',
  styleUrls: ['./header-scroll.component.scss']
})
export class HeaderScrollComponent implements OnInit {
  ev = globals;
  item1 = this.ev.MenuItem1;
  item2 = this.ev.MenuItem2;
  item3 = this.ev.MenuItem3;
  item4 = this.ev.MenuItem4;
  item5 = this.ev.MenuItem5;
  item6 = this.ev.MenuItem6;
  item7 = this.ev.MenuItem7;
  item8 = this.ev.MenuItem8;
  
  constructor() { }

  ngOnInit(): void {
  }

}
