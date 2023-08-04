import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../appSetting';

import { ApiService } from '../../api.service'

@Injectable({
  providedIn: 'root'
})


export class LoginService { 

    constructor(private api: ApiService) {}

    LoginUser(data: any): Observable<any> {
        return this.api.PostCall(AppSettings.LoginUser, data);
    }

    RegisterUser(data: any): Observable<any> {
      return this.api.PostCall(AppSettings.RegisterUser, data);
  }
}