///<reference path="../../../node_modules/rxjs/Subject.d.ts"/>
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";

import {PathNode, PathNodes} from "../core/central-services/path-node.interface";
import {CentralService} from "../core/central-services/central.service";

// import {of} from "rxjs/add/observable/of";
import {Observable, Subject} from "rxjs";
import {Store} from '@ngrx/store'
import {ApplicationState} from '../shared/store/application-state'
import {LoadUserProjectsAction} from '../shared/store/actions'

@Component({
  selector: 'dw-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
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


    this.centralService.pathNodes$.subscribe(
      pathNodes => this.store.dispatch(
        new LoadUserProjectsAction(pathNodes)
      )
    );

    this.navProps = new Subject<any>();
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

  reducePathNodes(pathNodes):number {

    // remove holes in pathNodes
    pathNodes.filter(()=> true);

    if (pathNodes.length === 0) {
      return -1;
    } else if (pathNodes.length === 1) {
      return 0;
    }

    let tmp1 = pathNodes.reduceRight(
      (i, currentValue, currentIndex, array) => {
        if (currentValue !== undefined && array[currentIndex-1] !== undefined) {
          return i ? i + 1 : 0;
        } else {
          return i;
        }
      } , undefined
    );

    console.log('tmp1', tmp1);

  }

  getStartContentIndex(pathNodes) {
    if (pathNodes.length < 3) {
      return -1;
    } else {
      return pathNodes.length - 2;
    }
  }

  main(pathNodes) {

    console.debug('pathNodes', pathNodes);

    this.navPathNodeIndex = 0;
    this.navPathNode = pathNodes[0];
    this.navPathNodes = pathNodes;

    this.navProps.subscribe()

    // this.projects = pathNodes[0].dwNodes;
    this.mainContent = pathNodes[2].dwNodes;
    this.infoContent = pathNodes[3].dwNodes;
    let startContentIndex = this.getStartContentIndex(pathNodes);

    // pathNodes.forEach(
    //   (pathNode: PathNode, i: number, pn: PathNodes) => {
    //     let len = pn.length;
    //     /// start with last index/node and goto first index/node
    //     let pNode1 = pn[len-i-1];
    //     // console.log('pn[len-i-1]', pNode1);
    //     if (pNode1.type === 'projects') {
    //       this.projects = pNode1.dwNodes;
    //       this.navPathNode = pNode1;
    //     } else if (pNode1.type === 'normtext') {
    //       //todo2 >= correct?
    //       let pNode2 = (len-i-2 >= 0) ? pn[len-i-2] : null;
    //
    //       if (pNode2.type === 'normtext') {
    //         /// falls zwei normtextnodes hintereinander => erster mainContent, => zweiter infoContent
    //         this.mainContent = pNode2.dwNodes;
    //         this.infoContent = pNode1.dwNodes;
    //       } else {
    //         /// falls nur ein einzelner normtextnode => erster mainContent, => comments auf infoContent
    //         this.mainContent = pNode1.dwNodes;
    //         // this.infoContent = undefined;
    //       }
    //     }
    //   }
    // );
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
