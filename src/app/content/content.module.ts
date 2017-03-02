import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import {NavContentModule} from "./nav-content/nav-content.module";
import {FormsModule} from "@angular/forms";
import {Routes, RouterModule} from "@angular/router";
import {ContentRoutingModule} from "./content-routing.module";
import {MainContentModule} from "./main-content/main-content.module";
import {InfoContentModule} from "./info-content/info-content.module";
import {EditModule} from "./edit/edit.module";
import {SharedModule} from "../shared/shared.module";
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    // RouterModule.forChild(routes1),
    // CommonModule,
    ContentRoutingModule,
    FormsModule,

    NavContentModule,
    MainContentModule,
    InfoContentModule,
    EditModule,

    SharedModule
  ],
  exports: [
    ContentComponent
  ],
  declarations: [ContentComponent, NavComponent, MainComponent],
})
export class ContentModule { }
