import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit , OnDestroy {
  mediaSub: Subscription;
  title = 'PrimetTourz';
  deviceXs: boolean;

    constructor(public mediaObserver: MediaObserver) { }
  
    ngOnInit(): void {
      // tslint:disable-next-line: deprecation
      this.mediaSub = this.mediaObserver.media$.subscribe(
        (result: MediaChange) => {
          console.log(result.mqAlias);
          this.deviceXs = result.mqAlias === 'xs' ? true : false;
        }
      );
    }
  
    ngOnDestroy(): void {
      this.mediaSub.unsubscribe();
      }
  
  }
