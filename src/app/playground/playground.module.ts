import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground.component';
import {FormsModule} from "@angular/forms";
import {PlaygroundRoutingModule} from "./playground-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PlaygroundRoutingModule
  ],
  declarations: [PlaygroundComponent]
})
export class PlaygroundModule { }
