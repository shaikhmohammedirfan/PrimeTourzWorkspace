import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, AbstractControl, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { APIsService } from '../../../services/APIs/apis.service';
import { globals } from '../../others/globals';
import { AirportCity } from '../../interfaces/airport_city';
import * as citydata from '../../../../assets/data/AirportAndCity.json';


// import { NotificationService } from '../../../services/notification.service';
// import { Citylist } from 'src/app/shared/interfaces/citylist';
// import { CitylistService } from '../../../services/citylist.service';




import { MatBottomSheet } from '@angular/material/bottom-sheet';
// import { SortBotmsheetComponent } from '../sort-botmsheet/sort-botmsheet.component';




@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.scss'],

})

export class HotelSearchComponent implements OnInit {


  sHotelForm: FormGroup;
  sHotelFormValue = [];
  citySelected;
  hlist;
  totalHotels = 0;
  ErrorMessage;
  plist;
  totalProperty = 0;

  minOdate;
  minIdate = new Date();

  inDateDefault;
  outDateDefault;

  // for citylist from json file
  filteredCities: Observable<AirportCity[]>;
  cities: AirportCity[] = (citydata as any).default;

  validationMessages = {
    city: {
      required: '\'City\' cannot be blank!',
    },
    indate: {
      required: 'Check In Date is required!',
      min: 'Wrong Check In Date!',
    },
    outdate: {
      required: 'Check Out Date is required!',
      min: 'Wrong Check Out Date!',
    },
  };

  formErrors = {
    city: '',
    indate: '',
    outdate: '',
  };


  panelOpenState = true;


  step = 0;

  setStep(index: number): void {
    this.step = index;
  }

  nextStep(): void {
    this.step++;
  }

  prevStep(): void {
   this.step--;
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private API: APIsService,
    // private notifyservice: NotificationService,
    // private citylistservice: CitylistService,
    private bottomSheet: MatBottomSheet
  ) {}

  ngOnInit(): void {

    this.formInit();
    this.setDefaultValues();
    this.formGroupValueChange();
    // this.loadCityNameList();

     // citylist code
    this.filteredCities = this.sHotelForm.get('city').valueChanges
     .pipe(
       startWith(''),
       map(city => city ? this._filtercities(city) : this.cities.slice())
     );

    this.panelOpenState = true;
    // this.panelOpenState = !this.panelOpenState;
  }


  formInit(): void {
    this.sHotelForm = this.fb.group({
      city: ['', [Validators.required]],
      indate: [],
      outdate: [[Validators.min]],
      totnights: [''],
      rooms: this.fb.array([this.addRoomFormGroup()]),
    });
  }
  addRoomFormGroup(): FormGroup {
    return this.fb.group({
      room: ['1', Validators.required],
      adults: ['1', Validators.required],
      children: [''],
    });
  }

  // funtion to get filter values for citylist
  private _filtercities(value: string): AirportCity[] {
    const filterValue = value.toLowerCase();
    return this.cities.filter(city => city.CityAirport.toLowerCase().indexOf(filterValue) > -1);
  }


  AddRoom(): void {
    (this.sHotelForm.get('rooms') as FormArray).push(this.addRoomFormGroup());
  }

  RemoveRoom(): void {
    (this.sHotelForm.get('rooms') as FormArray).removeAt(-1);
  }

  logValidationErrors(formgroup: FormGroup = this.sHotelForm): void {
    Object.keys(formgroup.controls).forEach((key: string) => {
      const abstractControl = formgroup.get(key);
      this.formErrors[key] = '';
      if (
        abstractControl &&
        !abstractControl.valid &&
        (abstractControl.touched || abstractControl.dirty)
      ) {
        const messages = this.validationMessages[key];
        console.log(messages);
        console.log(abstractControl.errors);

        for (const errorkey in abstractControl.errors) {
          if (errorkey) {
            this.formErrors[key] += messages[errorkey] + ' ';
          }
        }
      }

      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      }
    });
  }

  formGroupValueChange(): void {
    // this.sHotelForm.get('indate').valueChanges.subscribe((data) => {
    //   this.inDateChange(data);
    // });

    this.sHotelForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.sHotelForm);
    });
  }

  setDefaultValues(): void {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    this.minOdate = date;
    // this.outDateDefault = date;
  }

  inDateChange(event): void {
    if (
      this.sHotelForm.get('outdate').value < event &&
      this.sHotelForm.controls.indate.touched
    ) {
      // this.notifyservice.fail('CheckInDate > CheckOutDate!');
      this.sHotelForm.get('indate').setValue('');
    }
  }

  outDateChange(event): void {
    if (this.sHotelForm.get('indate').value > event) {
      // this.notifyservice.fail('CheckInDate > CheckOutDate!');
      this.sHotelForm.get('indate').setValue('');
    }
  }
  checkOutDate(control: AbstractControl): { [Key: string]: any } | null {
    return null;
  }

  onFormSubmit(): void {
    this.sHotelFormValue = this.sHotelForm.value;
    console.log('sHotelForm Value' , this.sHotelFormValue);

    globals.hotelCity = this.sHotelForm.get('city').value;
    this.citySelected = globals.hotelCity;
    // alert(globals.hotelCity);
   // this.router.navigate([' /search']);
    // list of hotels by city input by user
    this.getHotelByCity(globals.hotelCity);
    this.getPropertyByCity(globals.hotelCity);
  }

getPropertyByCity(city): void {
  this.API.loadPropertyByCity(city).subscribe((data) => {
    this.plist = data;

    this.totalProperty = this.plist.length;
    if (this.totalProperty === 0 ){
      this.ErrorMessage =  'No Results Found...! Please Modify Your Search';
    }
    console.log(this.plist);
    console.log('total property', this.totalProperty);
    }, (error: Response) => {
      if (error.status === 500) {
        // alert('Database Server/Connection Error!');
        // this.ErrorMessage = 'Database Server/Connection Error!';
      } else {
        console.log(error);
       // alert('An unexpected error occured!');
      }

    }
  );
}

getHotelByCity(city): void {
    this.API.loadHotelByCity(city).subscribe((data) => {
      this.hlist = data;
      this.totalHotels = this.hlist.length;
      if (this.totalHotels === 0) {
        this.ErrorMessage =  'No Results Found...! Please Modify Your Search';
      }
      console.log(this.hlist);
      console.log('total hotels' , this.totalHotels);
        }, (error: Response) => {
          if (error.status === 500) {
            alert('Database Server/Connection Error!');
            this.ErrorMessage = 'Database Server/Connection Error!';
          } else {
            console.log(error);
           // alert('An unexpected error occured!');
          }

        }
      );
  }


loadCityNameList(): void {
    // this.citylistservice.citylist().subscribe((response) => {
    //   this.citynamelist = response;
    //   console.log(this.citynamelist);
    // });
  }



  // getHotelsByCity() {
  //  // alert('global city value now:' + globals.hotelCity);
  //   this.hotelservice.hotellist().then((data) => {
  //     console.log(data);
  //     this.hlist = data;
  //     this.hotelbycity = this.hlist.filter(
  //       (item) => item.CITY.toLowerCase() === globals.hotelCity.toLowerCase()
  //     );
  //     // this.togglePanel();
  //     console.log(this.hotelbycity);
  //   });
  // }


togglePanel(): void {
    this.panelOpenState = !this.panelOpenState;
  }

openSortSheet(): void {
   // this.bottomSheet.open(SortBotmsheetComponent);

  }

openFilterSheet(): void {
   // this.bottomSheet.open(SortBotmsheetComponent);
  }

  // Sorting hotel list //
openSort(): void {
    this.hlist.reverse();
  }


}

