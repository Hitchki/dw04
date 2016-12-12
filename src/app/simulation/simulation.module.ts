import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimulationComponent } from './simulation.component';
import {SimulationRoutingModule} from "./simulation-routing.module";

@NgModule({
  imports: [
    CommonModule,
    SimulationRoutingModule
  ],
  declarations: [SimulationComponent]
})
export class SimulationModule { }
