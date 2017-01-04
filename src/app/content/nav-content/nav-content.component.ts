import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {PathNode} from "../../shared/service/central.service.interface";
import {Router} from "@angular/router";
import {CentralService} from "../../shared/service/central.service";

@Component({
  selector: 'dw-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.css']
})
export class NavContentComponent implements OnInit {
  @Input() projects: any;
  @Input() pathNode: PathNode;

  constructor(
    private router: Router,
    private centralServie: CentralService
  ) {
  }

  ngOnInit() {
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
    let fragment = this.centralServie.userId + '/' + this.pathNode.dwNodesFragment + '/0/subprojects/' + index + '/normtext';
    let url = 'user-link';

    // fragment = decodeURIComponent(fragment);
    // console.log('this.pathNode.dwNodesFragment', this.pathNode.dwNodesFragment);
    console.log('url', url);
    console.log('fragment', fragment);
    this.centralServie.navigate(url, fragment);
    // console.log('pathNode', this.pathNode);
    // console.log('$event', $event);
    // console.log('dwNode', dwNode);
    // console.log('index', index);
    // console.log('item', item);
  }
}
