import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../appSetting';

import { ApiService } from '../../api.service'

@Injectable({
  providedIn: 'root'
})


export class WorldData {
  

  constructor(private api : ApiService) {}


  GetUserDetails(data:any) : Observable<any> {
     return this.api.getCall(AppSettings.GetUserDetails + "?userID=" + data, data);
  }

  DeleteUserDetails(data:any) : Observable<any> {
    return this.api.getCall(AppSettings.DeleteUserDetails + "?user_id=" + data, data);
 }

}