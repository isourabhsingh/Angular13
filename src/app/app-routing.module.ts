import { Component, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import {WorldDataComponent} from './world-data/world-data.component'
import {AddUsersComponent} from './add-users/add-users.component'
import {LoginComponent} from './login/login.component'

const routes: Routes = [
  {
    path : '',
    component : LoginComponent
  },{
    path : 'Data',
    component : WorldDataComponent
  },{
    path : 'AddUsers',
    component : AddUsersComponent
  }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
