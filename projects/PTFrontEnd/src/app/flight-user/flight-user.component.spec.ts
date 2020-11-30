import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightUserComponent } from './flight-user.component';

describe('FlightUserComponent', () => {
  let component: FlightUserComponent;
  let fixture: ComponentFixture<FlightUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
