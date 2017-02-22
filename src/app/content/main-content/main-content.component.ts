import {Component, OnInit, Input} from '@angular/core';
import {ApplicationState} from '../../shared/store/application-state'
import {Store} from '@ngrx/store'

@Component({
  selector: 'dw-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  @Input() dwNodes: any;

  constructor(
    private store: Store<ApplicationState>
  ) {
    store.subscribe(
      state => console.log('MainContentComponent: ', state)
    )
  }

  ngOnInit() {
  }

}
