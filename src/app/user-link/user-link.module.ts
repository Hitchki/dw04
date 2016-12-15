import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLinkComponent } from './user-link.component';
import {UserLinkRoutingModule} from "./user-link-routing.module";

@NgModule({
  imports: [
    CommonModule,
    UserLinkRoutingModule
  ],
  declarations: [UserLinkComponent]
})
export class UserLinkModule { }
