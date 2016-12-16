import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentComponent} from "../content/content.component";
import {UserLinkComponent} from "./user-link.component";

const userLinkRoutes: Routes =
[
  { path: '', redirectTo: 'user-link', pathMatch: 'full' },
  { path: 'user-link', component: UserLinkComponent },
  // { path: 'user-link/:userId' , component: UserLinkComponent },
  // { path: 'user-link/:0', component: UserLinkComponent },
  // { path: 'user-link/:0/:1', component: UserLinkComponent },
  // { path: 'user-link/:0/:1/:2', component: UserLinkComponent },
  // { path: 'user-link/:0/:1/:2', component: UserLinkComponent },
];

@NgModule({
  imports: [RouterModule.forChild(userLinkRoutes)],
  exports: [RouterModule],
  providers: []
})
export class UserLinkRoutingModule { }

