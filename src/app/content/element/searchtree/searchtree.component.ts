import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'dw-searchtree',
  templateUrl: './searchtree.component.html',
  styleUrls: ['./searchtree.component.css']
})
export class SearchtreeComponent implements OnInit {
  @Input() dwNodes: any;

  constructor() { }

  ngOnInit() {
  }

}
