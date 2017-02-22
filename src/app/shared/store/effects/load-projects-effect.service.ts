import { Injectable } from '@angular/core';
import {CentralService} from '../../../core/central-services/central.service'
import {Actions, Effect} from '@ngrx/effects'
import {Observable} from 'rxjs'
import {LOAD_USER_PROJECTS_ACTION, UserProjectsLoadedAction} from '../actions'
import {Action} from '@ngrx/store'

@Injectable()
export class LoadProjectsEffectService {

  constructor(private actions$: Actions, private centralService: CentralService) { }

  // this.centralService.pathNodes$.subscribe(
  //   pathNodes => this.store.dispatch(
  //     new UserProjectsLoadedAction(pathNodes)
  //     // new LoadUserProjectsAction(pathNodes)
  //   )
  // );

  @Effect() userProjects$: Observable<Action> = this.actions$
    .ofType(LOAD_USER_PROJECTS_ACTION)
    .debug("action received")
    .switchMap(action => this.centralService.pathNodes$)
    .debug("data received via the HTTP request xxxxxxx")
    .map(pathNodes => new UserProjectsLoadedAction(pathNodes) );


  // @Effect() newUserSelected$ : Observable<Action> = this.actions$
  //   .ofType(SELECT_USER_ACTION)
  //   .debug("New user selected")
  //   .map(action =>  new LoadUserThreadsAction(action.payload));

}
