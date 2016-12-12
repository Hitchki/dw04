import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentComponent} from "./content/content.component";
import {SimulationComponent} from "./simulation/simulation.component";
import {PlaygroundComponent} from "./playground/playground.component";

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'projects', component: ContentComponent },
  { path: 'projects/:projectUrl', component: ContentComponent },
  // { path: 'projects/:projectUrl/subprojects', component: ContentComponent },
  // { path: 'projects/:projectUrl/subprojects/:subProjectUrl', component: ContentComponent },

  // { path: 'simulation', component: SimulationComponent },
  { path: 'playground', component: PlaygroundComponent },
  { path: 'playground/:projectUrl', component: PlaygroundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

export const routedComponents = [ContentComponent];
