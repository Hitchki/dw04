import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLinkComponent } from './user-link.component';
import {UserLinkRoutingModule} from "./user-link-routing.module";
import {ContentModule} from "../content/content.module";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    // CommonModule,

    SharedModule,
    UserLinkRoutingModule,
    ContentModule,
    FormsModule
  ],
  declarations: [UserLinkComponent]
})
export class UserLinkModule { }
