import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlaygroundComponent} from "./playground.component";
import {ContentComponent} from "../content/content.component";

const playgroundRoutes: Routes =
[
  {
    path: 'playground',
    component: PlaygroundComponent,
    children:
    [{
      path: 'projects',
      component: ContentComponent,
      children:
      [{
        path: ''
      }, {
        path: '/:projectsUrl',
        children: [{}]
      }]
    }, {
      path: ':projectsUrl',
      children:
      [{
        path: '',
        component: ContentComponent,
        children: [{
          path: ':subProjectsUrl',
        }
        ]
      }]
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(playgroundRoutes)],
  exports: [RouterModule],
  providers: []
})
export class PlaygroundRoutingModule { }

