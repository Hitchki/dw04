///<reference path="../../../node_modules/rxjs/Subject.d.ts"/>
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";

import {PathNode, PathNodes} from "../core/central-services/path-node.interface";
import {CentralService} from "../core/central-services/central.service";

// import {of} from "rxjs/add/observable/of";
import {Observable, Subject} from "rxjs";
import {Store} from '@ngrx/store'
import {ApplicationState} from '../store/application-state'
import {LoadUserProjectsAction} from '../store/actions'
import {CompVM} from './content.interfaces'

@Component({
  selector: 'dw-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  private projects: any;
  private navPathNode: PathNode;

  private mainContent: any;
  private infoContent: any;

  private projectUrl: string;
  private subProjectUrl: string;
  private pathNodes: PathNodes;
  private navPathNodeIndex: number;
  private navPathNodes: PathNodes;

  // private navProps: Observable<any>;
  private navProps: Observable<any>;
  private mainProps: Observable<any>;

  private mainVM: any;
  private compVM: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private centralService: CentralService,
    private store: Store<ApplicationState>
  ) {

  }

  ngOnInit() {
    // this.navProps = Observable.of(1,2,3);

    this.compVM = 'dummyData';
    // this.mainVM = 'dummyData';

    // this.store.dispatch(new LoadUserProjectsAction());

    // const dummyData =   { pathData: { selectedPathNodeIndex: 12 } };


    // this.centralService.pathNodes$.subscribe(
    //   pathNodes => this.store.dispatch(
    //     new UserProjectsLoadedAction(pathNodes)
    //     // new LoadUserProjectsAction(pathNodes)
    //   )
    // );

    // this.navProps = new Subject<any>();
    this.centralService.pathNodes$.subscribe(
      pathNodes => {
        this.pathNodes = pathNodes;

        this.main(this.pathNodes);
      }
    )
  }

  main(pathNodes) {

    console.debug('pathNodes', pathNodes);

    this.navPathNodeIndex = 0;
    this.navPathNode = pathNodes[0];
    this.navPathNodes = pathNodes;

    // this.navProps.subscribe()

    this.mainContent = pathNodes[2].dwNodes;
    this.infoContent = pathNodes[3].dwNodes;
    // let startContentIndex = this.getStartContentIndex(pathNodes);
    // throw new Error('Whoops!');

  }


}

