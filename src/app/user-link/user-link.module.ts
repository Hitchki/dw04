import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLinkComponent } from './user-link.component';
import {UserLinkRoutingModule} from "./user-link-routing.module";
import {ContentModule} from "../content/content.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    UserLinkRoutingModule,
    ContentModule,
    FormsModule
  ],
  declarations: [UserLinkComponent]
})
export class UserLinkModule { }
