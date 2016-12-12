import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import {NavContentModule} from "./nav-content/nav-content.module";
import {ProjectsService} from "../shared/model/projects/projects.service";
import {FormsModule} from "@angular/forms";
import {Routes, RouterModule} from "@angular/router";

// const routes1: Routes = [
//   // { path: '', redirectTo: 'projects', pathMatch: 'full' },
//   { path: ':projectUrl', component: ContentComponent },
//   { path: ':projectUrl/subprojects', component: ContentComponent },
//   { path: ':projectUrl/subprojects/:subProjectUrl', component: ContentComponent },
// ];

@NgModule({
  imports: [
    // RouterModule.forChild(routes1),
    CommonModule,
    FormsModule,
    NavContentModule
  ],
  declarations: [ContentComponent],
  providers: [ProjectsService]
})
export class ContentModule { }
