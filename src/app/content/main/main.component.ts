import {Component, OnInit, Input} from '@angular/core';
import {CompVM} from '../content.interfaces'

@Component({
  selector: 'dw-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() compVM: any;

  constructor() { }

  ngOnInit() {
    // console.log('compVM: ', this.compVM);
  }

}
