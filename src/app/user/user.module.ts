import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {UsrRoutingModule} from "./user-routing.module";

@NgModule({
  imports: [
    CommonModule,
    UsrRoutingModule
  ],
  declarations: [UserComponent]
})
export class UserModule { }
