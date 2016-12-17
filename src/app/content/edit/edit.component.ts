import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'dw-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() editNode: any;
  @Output() onInsertNode = new EventEmitter<any>();
  @Output() onDeleteNode = new EventEmitter<string>();
  @Output() onAddNodeLevel = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    // this.onDeleteNode.emit('xxxxxx');
  }

  insertNode() {
    this.onInsertNode.emit(this.editNode);
  }

  deleteNode() {
    this.onDeleteNode.emit(this.editNode);
  }

  addNodeLevel() {
    this.onAddNodeLevel.emit(this.editNode);
  }
}
