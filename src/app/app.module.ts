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
import {firebaseConfig} from "../environments/firebase.config";
import { AngularFireModule } from 'angularfire2/index';
import {PlaygroundModule} from "./playground/playground.module";
import {ContentPathService} from "./shared/model/content-path/content-path.service";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AdminRoutingModule} from "./admin/admin-routing.module";
import {AdminComponent} from "./admin/admin.component";
import {AdminModule} from "./admin/admin.module";
import {PlaygroundRoutingModule} from "./playground/playground-routing.module";
import {UserModule} from "./user/user.module";
import {UserLinkComponent} from "./user-link/user-link.component";
import {UserLinkModule} from "./user-link/user-link.module";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    UserModule,
    UserLinkModule,
    ContentModule,
    AdminModule,
    PlaygroundModule,
    SimulationModule,
    AppRoutingModule,
  ],
  providers: [ProjectsService, ConfigService, ContentLoadService, ContentPathService, MockdataService, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
