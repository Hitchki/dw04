import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentComponent} from "../content/content.component";
import {UserComponent} from "./user.component";

const userRoutes: Routes =
[
  { path: 'user/:0', component: UserComponent },
  { path: 'user/:0/:1', component: UserComponent },
  { path: 'user/:0/:1/:2', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule],
  providers: []
})
export class UserRoutingModule { }

