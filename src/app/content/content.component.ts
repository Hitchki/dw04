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

  // private navVM: CompVM;

  private mainVM: any;
  private compVM: any;

  // private pathNodesSubject = new Subject<PathNodes>();
  // public pathNodes$ = this.pathNodesSubject.asObservable();

  // private testUrl: string = 'http://localhost:4200/projects/1/subprojects/16';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private centralService: CentralService,
    private store: Store<ApplicationState>
  ) {
    store.subscribe(
      console.log
    )
  }

  ngOnInit() {
    // this.test();
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
        // console.log('###this.pathNodes## contentComponent', this.pathNodes);
        // console.dir(this.pathNodes);
        // console.dir(this.pathNodes[0]);

        this.main(this.pathNodes);
      }
    )
  }

  // reducePathNodes(pathNodes):number {
  //
  //   // remove holes in pathNodes
  //   pathNodes.filter(()=> true);
  //
  //   if (pathNodes.length === 0) {
  //     return -1;
  //   } else if (pathNodes.length === 1) {
  //     return 0;
  //   }
  //
  //   let tmp1 = pathNodes.reduceRight(
  //     (i, currentValue, currentIndex, array) => {
  //       if (currentValue !== undefined && array[currentIndex-1] !== undefined) {
  //         return i ? i + 1 : 0;
  //       } else {
  //         return i;
  //       }
  //     } , undefined
  //   );
  //
  //   console.log('tmp1', tmp1);
  //
  // }

  // getStartContentIndex(pathNodes) {
  //   if (pathNodes.length < 3) {
  //     return -1;
  //   } else {
  //     return pathNodes.length - 2;
  //   }
  // }

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

  test() {
    console.log('function test() in contentComponent got called');
  }

  ////////////////////////////////////////////


  onClickNode(project, $event, i, item) {
    console.debug('onClickNode', project, $event, i, item);
  }

  testNavigation() {
    this.router.navigate(['/projects', 3, 'subprojects', 3, {foo0: 'foo'} ], {relativeTo: this.route});
    // this.router.navigate([3, 'subprojects', 3]);
  }

  // buildUrlPath(projectUrl: string) {
  //   let routePath:RoutePath = this.contentPathService.getUrlPath(projectUrl);
  // }

}


// this.route.params
//   .forEach((params) => {
//     // console.log('activatedRoute', this.route);
//     this.projectUrl = params['projectUrl'];
//     this.subProjectUrl = params['subProjectUrl'];
//     // return this.service.getHeroes();
//   });
//
// // this.projectsService.loadProjects(this.projectUrl)
// this.projectsService.loadProjects('')
//   .subscribe(
//     (data) => console.log('projectLoading success! ', data),
//     (err) => console.log('projectLoading error! ', err),
//     () => console.log('projectLoading completed')
//   );

// this.onClick.emit(23);
