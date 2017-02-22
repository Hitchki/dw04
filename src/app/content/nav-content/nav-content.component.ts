import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";
import {CentralService} from "../../core/central-services/central.service";
import {PathNode, PathNodes} from "../../core/central-services/path-node.interface";
import {Observable} from "rxjs";
import {Store} from '@ngrx/store'
import {ApplicationState} from '../../shared/store/application-state'

@Component({
  selector: 'dw-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss']
})
export class NavContentComponent implements OnInit {
  // @Input() projects: any;
  @Input() pathNode: PathNode;
  @Input() pathNodeIndex: number;
  @Input() pathNodes: PathNodes;
  @Input() pathNodeObs: Observable<any>;
  private projects: any[];
  private isEditMode: boolean;

  constructor(
    private router: Router,
    private centralServie: CentralService,
    private store: Store<ApplicationState>
  ) {
    store.subscribe(
      state => console.log('navContentComponent: ', state)
    )
  }

  ngOnInit() {



    // this.projects = this.pathNode.dwNodes;
    this.pathNodeObs.subscribe(
      pn => console.debug('nav-component pathNodeObs')
      // pn => console.info()
    );
    this.isEditMode = true;
  }

  ngAfterViewChecked() {
    // this.projects = this.pathNode.dwNodes;
    // this.pathNodeObs.subscribe(
    //   pn => alert('hier1')
    //   // pn => console.info()
    // )
  }

  insertNode(editNode) {
    console.debug('insertNode', editNode);
  }

  deleteNode(deleteNode) {
    console.debug('deleteNode', deleteNode);
  }

  addNodeLevel(node) {
    console.debug('addNodeLevel', node);
  }

  onClick($event, dwNode, index, item) {
    //todo dwNodesFragment
    // let fragment = this.centralServie.userId + '/' + this.pathNode.dwNodesFragment + '/0/subprojects/' + index + '/normtext';
    let fragment = this.centralServie.userId + '/' + this.pathNode.fragment + '/subprojects/' + index + '/normtext';

    let url = 'user-link';

    // fragment = decodeURIComponent(fragment);
    // console.log('url', url);
    // console.log('fragment', fragment);
    this.centralServie.navigate(url, fragment);
    // console.log('pathNode', this.pathNode);
    // console.log('$event', $event);
    // console.log('dwNode', dwNode);
    // console.log('index', index);
    // console.log('item', item);
  }
}
