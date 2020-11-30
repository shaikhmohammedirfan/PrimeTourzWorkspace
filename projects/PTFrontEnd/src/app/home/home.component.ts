import { Component, OnInit, Input } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { globals } from '../shared/others/globals';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
@Input() deviceXs: boolean;
pageTitle: string;
ev = globals;

constructor(private title: Title, private meta: Meta) { 
  // this.ev.MenuItem1 = 'user/hotel-user';
  // this.ev.MenuItem2 = 'user/flights';
  // this.ev.MenuItem3 = 'user/tours';
  // this.ev.MenuItem4 = 'umrah';
  // this.ev.MenuItem5 = 'packages';
  // this.ev.MenuItem6 = 'b2b';
  // this.ev.MenuItem7 = 'user/contact';
}

  ngOnInit(): void {
    this.pageTitle = 'Prime Tours & Travels  ';
    this.title.setTitle(this.pageTitle);
    this.meta.addTag({
      keywords: 'Prime Tours and Travels'
    });
    this.meta.addTag({
      descriptin: 'Primet Tours and Travels Home Page'
    });
  }

}
