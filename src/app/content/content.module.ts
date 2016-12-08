import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import {NavContentModule} from "./nav-content/nav-content.module";
import {ProjectsService} from "../shared/model/projects/projects.service";

@NgModule({
  imports: [
    CommonModule,
    NavContentModule
  ],
  declarations: [ContentComponent],
  providers: [ProjectsService]
})
export class ContentModule { }
