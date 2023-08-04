import { Component } from '@angular/core';
import { LoginService } from '../services/Login/login.service';
import { Router, ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../services/appSetting';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

interface IUser {
  user_email: string;
  user_password: string;
}

interface IRegistration {
  user_name: string;
  user_email: string;
  user_password: string;
  user_contact: number;
  user_address: string;
  user_age: number;
  user_gender: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  private hubConnectionBuilder!: HubConnection;
  offers: any[] = [];

  user: IUser;
  registration: IRegistration;
  response: any;
  data: any;
  Login: any;

  reactiveForm: FormGroup = new FormGroup({
    user_email: new FormControl(''),
    user_password: new FormControl('')
  });

  reactiveFormRegistration: FormGroup = new FormGroup({
    user_id: new FormControl(''),
    user_name: new FormControl(''),
    user_email: new FormControl(''),
    user_password: new FormControl(''),
    user_contact: new FormControl(''),
    user_address: new FormControl(''),
    user_age: new FormControl(''),
    user_gender: new FormControl('')
  });

  constructor(public api: LoginService, private router: Router) {
    this.user = {} as IUser;
    this.registration = {} as IRegistration;
  }


  ngOnInit() {
    this.Login = true;




    this.hubConnectionBuilder = new HubConnectionBuilder()
      .withUrl('https://localhost:7029/offers')
      .configureLogging(LogLevel.Information)
      .build();
    this.hubConnectionBuilder
      .start()
      .then(() => console.log('Connection started.......!'))
      .catch(err => console.log(err));

    this.hubConnectionBuilder.on('SendOffersToUser', (data: any) => {
        this.offers.push(data);
        console.log(this.offers);
    });
  }

  onSubmitLogin() {
    this.user = this.reactiveForm.value;

    this.api.LoginUser(this.user).subscribe(res => {
      this.response = res;
      this.data = this.response.Data;
      if (this.response.StatusCode == 200) {
        environment.accessToken = this.data.access_token;
        this.router.navigate(['/Data'])
      }
      else {
        alert(this.response.Message);
      }

    },
      (error) => {
        // Handle the error message
        alert(error);
        console.error(error);
      });




  }


  onSubmitRegistration() {
    this.registration = this.reactiveFormRegistration.value;

    this.api.RegisterUser(this.registration).subscribe(res => {
      this.response = res;
      if (this.response.StatusCode == 200) {
        alert("registration Successfully ! Please login to portal");
        this.showHideRegistrationForm(1);
        //this.router.navigate(['/'])
      }

      //console.log(this.data);
    });

  }

  showHideRegistrationForm(toggle: any) {
    if (toggle == 1) {
      this.Login = true;
    }
    else {
      this.Login = false;
    }

  }

}
