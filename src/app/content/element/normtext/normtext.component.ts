import {Component, OnInit, Input} from '@angular/core';
import {EditElement} from "../edit-element/edit-element";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dw-normtext',
  templateUrl: './normtext.component.html',
  styleUrls: ['./normtext.component.css']
})
export class NormtextComponent extends EditElement implements OnInit {
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
