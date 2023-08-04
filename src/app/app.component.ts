import { Component } from '@angular/core';
import { HomeService }  from '../app/services/Home/home.service';
import {Router ,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webApp';

  
  response: any;
  data : any;

  constructor(public api : HomeService,private router: Router){
  
  }

  ngOnInit() {
   // this. GetApiData(0);
   //this.router.navigate(['./Login']);
   
  }

  GetApiData(data:any){
    this.api.GetAuthorDetails(data).subscribe(res => {
      this.response = res;
      this.data = this.response.Data;
       console.log(this.data);
    });
  }


}
