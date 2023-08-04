import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldDataComponent } from './world-data/world-data.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { AddUsersComponent } from './add-users/add-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    WorldDataComponent,
    AddUsersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
