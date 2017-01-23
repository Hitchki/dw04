import {Component, OnInit, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditNodeFunctions} from "../../edit/edit-node-functions";

@Component({
  selector: 'dw-normtext',
  templateUrl: './normtext.component.html',
  styleUrls: ['./normtext.component.css']
})
export class NormtextComponent extends EditNodeFunctions implements OnInit {
  @Input() dwNodes: any;

  constructor() {
    super();
  }

  ngOnInit() {
  }

  onInsertNode(editNode) {
    console.log('onInsertNode-normtext!!', editNode);
    super.onInsertNode(editNode);
  }

  onClick($event, dwNode, index, item){
    console.log('$event', $event);
    console.log('dwNode', dwNode);
    console.log('index', index);
    console.log('item', item);
  }
}
