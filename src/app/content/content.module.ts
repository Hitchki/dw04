import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import {NavContentModule} from "./nav-content/nav-content.module";
import {ProjectsService} from "../shared/model/projects/projects.service";
import {FormsModule} from "@angular/forms";
import {Routes, RouterModule} from "@angular/router";
import {ContentRoutingModule} from "./content-routing.module";
import {MainContentModule} from "./main-content/main-content.module";
import {InfoContentModule} from "./info-content/info-content.module";

@NgModule({
  imports: [
    // RouterModule.forChild(routes1),
    CommonModule,
    ContentRoutingModule,
    FormsModule,
    NavContentModule,
    MainContentModule,
    InfoContentModule
  ],
  exports: [
    ContentComponent
  ],
  declarations: [ContentComponent],
  providers: [ProjectsService]
})
export class ContentModule { }
