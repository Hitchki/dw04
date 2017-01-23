import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentComponent} from "../content/content.component";
import {UserLinkComponent} from "./user-link.component";
import {CanDeactivateGuard} from "../junk_old_shared/service/can-deactivate-guard.service";

const userLinkRoutes: Routes =
[
  { path: 'user-link', component: UserLinkComponent },
  // { path: 'user-link/:userId',
  //   component: UserLinkComponent,
  //   children: [{
  //     path: '',
  //     component: ContentComponent
  //   }]
  // },


  // { path: '', redirectTo: 'user-link', pathMatch: 'full' },
  // { path: 'user-link', component: UserLinkComponent, canDeactivate:[CanDeactivateGuard] },
  // { path: 'user-link/:0', component: UserLinkComponent },
  // { path: 'user-link/:0/:1', component: UserLinkComponent },
  // { path: 'user-link/:0/:1/:2', component: UserLinkComponent },
  // { path: 'user-link/:0/:1/:2', component: UserLinkComponent },
];

@NgModule({
  imports: [RouterModule.forChild(userLinkRoutes)],
  exports: [RouterModule],
  providers: [CanDeactivateGuard]
})
export class UserLinkRoutingModule { }

