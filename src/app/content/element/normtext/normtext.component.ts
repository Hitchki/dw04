import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'dw-normtext',
  templateUrl: './normtext.component.html',
  styleUrls: ['./normtext.component.css']
})
export class NormtextComponent implements OnInit {
  @Input() dwNodes: any;

  constructor() { }

  ngOnInit() {
  }

}
