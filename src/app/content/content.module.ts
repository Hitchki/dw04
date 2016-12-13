import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import {NavContentModule} from "./nav-content/nav-content.module";
import {ProjectsService} from "../shared/model/projects/projects.service";
import {FormsModule} from "@angular/forms";
import {Routes, RouterModule} from "@angular/router";
import {ContentRoutingModule} from "./content-routing.module";

@NgModule({
  imports: [
    // RouterModule.forChild(routes1),
    CommonModule,
    ContentRoutingModule,
    FormsModule,
    NavContentModule
  ],
  declarations: [ContentComponent],
  providers: [ProjectsService]
})
export class ContentModule { }
