import { Component, OnInit } from '@angular/core';
import {AngularFire, AngularFireDatabase} from "angularfire2";

@Component({
  selector: 'app-angularfire-list-binding',
  templateUrl: './angularfire-list-binding.component.html',
  styleUrls: ['./angularfire-list-binding.component.css']
})
export class AngularfireListBindingComponent implements OnInit {

  private users: any;

  constructor(
    private db: AngularFireDatabase,
    private af: AngularFire,
  ) { }

  ngOnInit() {
    this.test()
  }

  test() {
    this.users = this.af.database.list('users');
    this.users.push({email: 'franz.irnberger@gmail.com'});
    // users.update({adress: 'Wien'});
    //
    //
    // const users1 = this.af.database.object('users');
    // users1.set(['abc', 'dfg']);
  }

}
