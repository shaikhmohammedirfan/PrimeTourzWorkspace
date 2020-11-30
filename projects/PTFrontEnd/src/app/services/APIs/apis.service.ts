import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Hotels } from '../../shared/interfaces/hotels';
import { Property } from '../../shared/interfaces/property';

@Injectable({
  providedIn: 'root'
})
export class APIsService {
 // URL defined in nodes API
 apiURL = 'http://localhost:5000';

 statusMessage = 'Loading data..Please wait.....!';

 constructor(private http: HttpClient) { }

// Http Options
httpOptions = {
 headers: new HttpHeaders({
   'Content-Type': 'application/json'
 })
};

// hotelmaster API
loadHotelByCity(city): Observable<Hotels> {
  return this.http.get<Hotels>(this.apiURL + '/api/hotels/' + city)
  .pipe(
    catchError(this.handleError));
}

// propertymaster API
loadPropertyByCity(city): Observable<Property> {
  return this.http.get<Property>(this.apiURL + '/api/property/' + city)
  .pipe(
    catchError(this.handleError));
}



// Send error code to component to display user freindly message
// tslint:disable-next-line:typedef
handleError(error: Response) {
  if (error.status === 0) {
    alert('Server/Connection Error');
  } else {
    console.error('Error from api service' , error);
   // alert('Unexpected Error Occured');
  }
  return throwError(error);
}
}

