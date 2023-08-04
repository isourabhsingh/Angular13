import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../appSetting';

import { ApiService } from '../../api.service'

@Injectable({
  providedIn: 'root'
})

 
export class AddUser {
  

  constructor(private api : ApiService) {}


  AddUserDetails(data:any) : Observable<any> {
    return this.api.PostCall(AppSettings.AddUserDetails, data);
}

}