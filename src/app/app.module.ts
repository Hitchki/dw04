import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {ContentModule} from "./content/content.module";
import {SimulationModule} from "./simulation/simulation.module";
import {ConfigService} from "./shared/config/config.service";
import {ProjectsService} from "./shared/model/projects/projects.service";
import {ContentLoadService} from "./shared/model/content-load/content-load.service";
import {MockdataService} from "./shared/mockdata/mockdata.service";
import {FirebaseService} from "./shared/firebase/firebase.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ContentModule,
    SimulationModule
  ],
  providers: [ProjectsService, ConfigService, ContentLoadService, MockdataService, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
