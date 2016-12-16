import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLinkComponent } from './user-link.component';
import {UserLinkRoutingModule} from "./user-link-routing.module";
import {ContentModule} from "../content/content.module";

@NgModule({
  imports: [
    CommonModule,
    UserLinkRoutingModule,
    ContentModule
  ],
  declarations: [UserLinkComponent]
})
export class UserLinkModule { }
