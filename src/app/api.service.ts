import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AppSettings, environment } from './services/appSetting';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  PostCall(apiName: string = "", formData: any): Observable<any> {
    
    var headerDict = {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': environment.accessToken
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };


    const body = JSON.stringify(formData);
   
    return this.http.post(apiName, body, requestOptions).pipe(map(result => {
      return result;
    }),
    catchError((error: HttpErrorResponse) => {
      
      if (error.status === 0) {
        // Handle the scenario when the API server is closed
        const errorMessage = 'API server is not available. Please try again later.';
        return throwError(errorMessage);
      } else {
        // Handle other errors
        return throwError('An error occurred. Please try again.');
      }
    }));
  }


  getCall(apiName: string = "", para: any = null): Observable<any> {

    var headerDict = {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': environment.accessToken

    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };


    return this.http.get(apiName, requestOptions).pipe(map(res => res));
  }


}

