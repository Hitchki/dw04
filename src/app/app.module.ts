import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {ContentModule} from "./content/content.module";
import {SimulationModule} from "./simulation/simulation.module";
import {firebaseConfig} from "../environments/firebase.config";
import { AngularFireModule } from 'angularfire2/index';
import {PlaygroundModule} from "./playground/playground.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AdminRoutingModule} from "./admin/admin-routing.module";
import {AdminComponent} from "./admin/admin.component";
import {AdminModule} from "./admin/admin.module";
import {PlaygroundRoutingModule} from "./playground/playground-routing.module";
import {UserModule} from "./user/user.module";
import {UserLinkComponent} from "./user-link/user-link.component";
import {UserLinkModule} from "./user-link/user-link.module";

import {CoreModule} from "./core/core.module";
import {FirebaseService} from "./core/firebase/firebase.service";
import {MockdataService} from "./core/mockdata/mockdata.service";
import {ContentLoadService} from "./core/central-services/content-load.service";
import {CentralService} from "./core/central-services/central.service";
import {ConfigService} from "./core/config/config.service";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,

    CoreModule,
    // CoreModule.forRoot({userName: 'Miss Marple'}),

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
  exports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [ConfigService,
              MockdataService,
              FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
