import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentComponent} from "../content/content.component";
import {UserComponent} from "./user.component";

const userRoutes: Routes =
[
  {
    path: 'user',
    component: UserComponent,
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
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule],
  providers: []
})
export class UsrRoutingModule { }

