import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlaygroundComponent} from "./playground.component";
import {ContentComponent} from "../content/content.component";
import {GitPlaygroundComponent} from "./git-playground/git-playground.component";
import {SimPlaygroundComponent} from "./sim-playground/sim-playground.component";
import {Play3Component} from "./play3/play3.component";
import {Play2Component} from "./play2/play2.component";
import {Play1Component} from "./play1/play1.component";
import {CssComponent} from "./css/css.component";

const playgroundRoutes: Routes =
[
  {
    path: 'playground',
    component: PlaygroundComponent,
    children:
    [
      {
        path: 'css',
        component: CssComponent
      },
      {
        path: 'git-playground',
        component: GitPlaygroundComponent
      },
      {
        path: 'play1',
        component: Play1Component
      },
      {
        path: 'play2',
        component: Play2Component
      },
      {
        path: 'play3',
        component: Play3Component
      },
      {
        path: 'sim-playground',
        component: SimPlaygroundComponent
      },


    //   {
    //   path: 'projects',
    //   component: ContentComponent,
    //   children:
    //   [{
    //     path: ''
    //   }, {
    //     path: '/:projectsUrl',
    //     children: [{}]
    //   }]
    // }, {
    //   path: ':projectsUrl',
    //   children:
    //   [{
    //     path: '',
    //     component: ContentComponent,
    //     children: [{
    //       path: ':subProjectsUrl',
    //     }
    //     ]
    //   }]
    // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(playgroundRoutes)],
  exports: [RouterModule],
  providers: []
})
export class PlaygroundRoutingModule { }

