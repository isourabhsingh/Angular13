import { Component } from '@angular/core';
import { AddUser  } from '../services/AddUsers/Add.service'
import {Router ,ActivatedRoute } from "@angular/router"
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WorldData }  from '../services/world-data/world.service';
 
interface IUser {
  user_name: string;
  user_email: string;
  user_contact: string;
  user_address: string;
  user_age: string;
  user_gender: string;
}

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})


export class AddUsersComponent {

  //reactiveForm!: FormGroup;
  response :any;
  data :any;
  user: IUser;
  editID:any = false;
  getResponse :any;
  

  reactiveForm: FormGroup = new FormGroup({
    user_id: new FormControl(''),
    user_name: new FormControl(''),
    user_email: new FormControl(''),
    user_contact: new FormControl(''),
    user_address: new FormControl(''),
    user_age: new FormControl(''),
    user_gender: new FormControl('')
  });

  constructor(public api : AddUser,private router: Router , private activatedRoute: ActivatedRoute,private worldAPI : WorldData){
    //this.reactiveForm = new FormGroup({});
    this.user = {} as IUser;
  }

  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe(params => {
        console.log(params);

        if(params['ID'] != undefined && params['ID'] != null && params['ID'] != ''){
          this.editID = true;
          this.GetUserDataByID(parseInt(params['ID']));
        }
       
      }
    );
  }


  onSubmit(){
    this.user = this.reactiveForm.value;

   // var dd = this.reactiveForm.controls['name'].value;
   //var dds =  this.reactiveForm.get('name')!

    this.api.AddUserDetails(this.user).subscribe(res => {
      this.response = res;
      this.data = this.response.Data;
      this.router.navigate(['/Data'])
       //console.log(this.data);
    });
  }


  GetUserDataByID(ID:any){
    this.worldAPI.GetUserDetails(ID).subscribe(res => {
      this.getResponse = res.Data[0];
      console.log(this.getResponse);
      this.reactiveForm.patchValue({
          user_id:    this.getResponse.user_id,
          user_name:    this.getResponse.user_name,
          user_email:   this.getResponse.user_email,
          user_contact: this.getResponse.user_contact,
          user_address: this.getResponse.user_address,
          user_age:     this.getResponse.user_age,
          user_gender:  this.getResponse.user_gender
      });
    });
  }
} 
