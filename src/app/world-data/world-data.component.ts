import { Component } from '@angular/core';
import { WorldData }  from '../services/world-data/world.service';
import {Router ,ActivatedRoute } from "@angular/router"
import { environment } from '../services/appSetting';

declare var window: any;

@Component({
  selector: 'app-world-data',
  templateUrl: './world-data.component.html',
  styleUrls: ['./world-data.component.css']
})
export class WorldDataComponent {

  response: any;
  data : any;
  closeResult: string = '';

  constructor(public api : WorldData,private router: Router){}


  ngOnInit() {
    if(environment.accessToken != ""){
      this. GetUserData(0);
    }
    else{
      this.router.navigate(['/'])
    }
    
  } 

  GetUserData(ID:any){
    this.api.GetUserDetails(ID).subscribe(res => {
      this.response = res;
      this.data = this.response.Data;
       //console.log(this.data);
    });
  }

  DeleteUserData(ID:any){
    this.api.DeleteUserDetails(ID).subscribe(res => {
      this.response = res;
      this.data = this.response.Data;

      this.ngOnInit();
    //  this.router.navigate(['/Data'])
       //console.log(this.data);
    });
  }

}

