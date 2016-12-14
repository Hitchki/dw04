import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {ContentComponent} from "../content/content.component";

const adminRoutes: Routes = [
  // { path: 'admin', component: AdminComponent },
  // { path: 'admin/projects', component: ContentComponent },

  // { path: 'admin', component: AdminComponent },
  { path: 'admin', component: AdminComponent,
    children: [{
      path: '',
      component: ContentComponent
    },{
      path: 'projects',
      component: ContentComponent
    }]
  },
  { path: 'admin/:0', component: AdminComponent },
  { path: 'admin/:0/:1', component: AdminComponent },
  { path: 'admin/:0/:1/:2', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AdminRoutingModule { }

