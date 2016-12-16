import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentComponent} from "./content.component";

const contentRoutes: Routes = [
  // { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'projects', component: ContentComponent },
  { path: 'projects/:projectUrl', component: ContentComponent },
  // { path: 'projects/:projectUrl/:subProjectUrl', component: ContentComponent },
  // { path: 'projects/:projectUrl', component: ContentComponent },
  { path: 'projects/:projectUrl/subprojects', component: ContentComponent },
  { path: 'projects/:projectUrl/subprojects/:subProjectUrl', component: ContentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(contentRoutes)],
  exports: [RouterModule],
  providers: []
})
export class ContentRoutingModule { }

