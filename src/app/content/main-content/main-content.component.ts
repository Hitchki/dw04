import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'dw-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  @Input() dwNodes: any;

  constructor() { }

  ngOnInit() {
  }

}
