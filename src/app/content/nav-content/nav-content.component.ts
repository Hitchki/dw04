import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'dw-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.css']
})
export class NavContentComponent implements OnInit {
  @Input() projects: any;

  constructor() { }

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
}
