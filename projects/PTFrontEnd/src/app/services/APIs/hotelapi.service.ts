import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Hotels } from '../../shared/interfaces/hotels';

@Injectable({
  providedIn: 'root'
})
export class HotelapiService {

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

loadHotelByCity(city): Observable<Hotels> {
  return this.http.get<Hotels>(this.apiURL + '/api/hotels/' + city)
  .pipe(
  catchError(this.handleError));
}

// Error handling

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
