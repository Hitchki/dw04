import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SimulationComponent} from "./simulation.component";

const simulationRoutes: Routes = [
  { path: 'simulation', component: SimulationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(simulationRoutes)],
  exports: [RouterModule],
  providers: []
})
export class SimulationRoutingModule { }

// export const routedComponents = [ContentComponent];


// import { NgModule }             from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HeroListComponent }    from './hero-list.component';
// import { HeroDetailComponent }  from './hero-detail.component';
// const heroesRoutes: Routes = [
//   { path: 'heroes',  component: HeroListComponent },
//   { path: 'hero/:id', component: HeroDetailComponent }
// ];
// @NgModule({
//   imports: [
//     RouterModule.forChild(heroesRoutes)
//   ],
//   exports: [
//     RouterModule
//   ]
// })
// export class HeroRoutingModule { }
