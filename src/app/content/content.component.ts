import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ProjectsService} from "../shared/model/projects/projects.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {ContentPathService} from "../shared/model/content-path/content-path.service";
import {RoutePath} from "../shared/model/content-nodes/content-nodes";
import {CentralService} from "../shared/service/central.service";
import {PathNodes, PathNode} from "../shared/service/central.service.interface";

@Component({
  selector: 'dw-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  // @Input() name: string;
  // @Input() private projects: any;
  // @Input() mainContent: any;
  // @Input() infoContent: any;

  private projects: any;
  private navPathNode: PathNode;

  private mainContent: any;
  private infoContent: any;

  // @Output() onSelectNode = new EventEmitter<number>();
  // @Output() onClick = new EventEmitter<number>();
  private projectUrl: string;
  private subProjectUrl: string;
  private pathNodes: PathNodes;
  // private testUrl: string = 'http://localhost:4200/projects/1/subprojects/16';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private contentPathService: ContentPathService,
    private centralService: CentralService
  ) { }

  ngOnInit() {
    this.test();
    this.centralService.pathNodes$.subscribe(
      pathNodes => {
        this.pathNodes = pathNodes;
        console.log('###this.pathNodes## contentComponent', this.pathNodes);
        this.main(this.pathNodes);
      }
    )
  }

  main(pathNodes) {

    // this.projects = pathNodes[0].dwNodes;
    // this.mainContent = pathNodes[2].dwNodes;

    // pathNodes.forEach(
    //   (pathNode: PathNode) => {
    //     //console.table(dwNode);
    //     if (pathNode.type === 'projects') {
    //       this.projects = pathNode.dwNodes;
    //     }
    //   }
    // );

    pathNodes.forEach(
      (pathNode: PathNode, i: number, pn: any[]) => {
        let len = pn.length;
        let pNode = pn[len-i-1];
        console.log('pn[len-i-1]', pNode);
        if (pNode.type === 'projects') {
          this.projects = pNode.dwNodes;
          this.navPathNode = pNode;
        } else if (pNode.type === 'normtext') {
          this.mainContent = pNode.dwNodes;
        }
      }
    );
  }

  test() {
    console.log('function test() in contentComponent got called');
  }

  ////////////////////////////////////////////


  // click($event) {
  //   console.log($event);
  //   $event.target.innerHTML += " ...ich wurde geklickt!!"
  //   this.onClick.emit(23);
  // }

  onClickNode(project, $event, i, item) {
    console.debug('onClickNode', project, $event, i, item);
  }

  testNavigation() {
    this.router.navigate(['/projects', 3, 'subprojects', 3, {foo0: 'foo'} ], {relativeTo: this.route});
    // this.router.navigate([3, 'subprojects', 3]);
  }

  buildUrlPath(projectUrl: string) {
    let routePath:RoutePath = this.contentPathService.getUrlPath(projectUrl);
  }

  // onInsertNode(editNode) {
  //   console.debug('insertNode', editNode);
  // }
  //
  // onDeleteNode(deleteNode) {
  //   console.debug('deleteNode', deleteNode);
  // }
  //
  // onAddNodeLevel(node) {
  //   console.debug('addNodeLevel', node);
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
