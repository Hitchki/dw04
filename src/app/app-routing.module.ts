import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentComponent} from "./content/content.component";
import {SimulationComponent} from "./simulation/simulation.component";

const routes: Routes = [
  { path: '', redirectTo: 'project', pathMatch: 'full' },
  { path: 'project', component: ContentComponent },
  { path: 'project/:projectUrl', component: ContentComponent },
  { path: 'simulation', component: SimulationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

export const routedComponents = [ContentComponent];
