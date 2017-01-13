import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground.component';
import {FormsModule} from "@angular/forms";
import {PlaygroundRoutingModule} from "./playground-routing.module";
import {GitPlaygroundModule} from "./git-playground/git-playground.module";
import {Play1Module} from "./play1/play1.module";
import {Play2Module} from "./play2/play2.module";
import {Play3Module} from "./play3/play3.module";
import {SimPlaygroundModule} from "./sim-playground/sim-playground.module";
import {CssModule} from "./css/css.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CssModule,
    PlaygroundRoutingModule,
    GitPlaygroundModule,
    Play1Module,
    Play2Module,
    Play3Module,
    SimPlaygroundModule
  ],
  declarations: [PlaygroundComponent]
})
export class PlaygroundModule { }
