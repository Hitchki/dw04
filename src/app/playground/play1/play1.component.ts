import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-play1',
  templateUrl: './play1.component.html',
  styleUrls: ['./play1.component.css']
})
export class Play1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    this.createObservable()
      .subscribe(console.log);
  }

  createObservable() {
    return Observable.create( function (observer) {
        observer.next(1);
        observer.next(2);
        observer.next(3);
      });
  };

}
