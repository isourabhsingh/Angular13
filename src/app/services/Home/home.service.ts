import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../appSetting';

import { ApiService } from '../../api.service'

@Injectable({
  providedIn: 'root'
})


export class HomeService {

    constructor(private api: ApiService) {}

    GetAuthorDetails(data: any): Observable<any> {
        return this.api.getCall(AppSettings.GetAuthorDetails, data);
    }
}