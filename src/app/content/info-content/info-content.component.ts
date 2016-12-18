import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'dw-info-content',
  templateUrl: './info-content.component.html',
  styleUrls: ['./info-content.component.css']
})
export class InfoContentComponent implements OnInit {
  @Input() dwNodes: any;

  constructor() { }

  ngOnInit() {
  }

}
