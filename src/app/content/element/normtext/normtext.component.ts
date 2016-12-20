import {Component, OnInit, Input} from '@angular/core';
import {EditElement} from "../edit-element/edit-element";

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

}
