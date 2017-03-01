import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../../core/firebase/firebase.service'
import {AngularFire, AngularFireDatabase} from "angularfire2";

@Component({
  selector: 'app-angularfire-object-binding',
  templateUrl: './angularfire-object-binding.component.html',
  styleUrls: ['./angularfire-object-binding.component.css']
})
export class AngularfireObjectBindingComponent implements OnInit {

  private users1: any;

  constructor(
    // private firebaseService: FirebaseService
    private db: AngularFireDatabase,
    private af: AngularFire,
  ) { }

  ngOnInit() {
    this.test()
  }

  test() {
    this.users1 = this.af.database.object('users1');
    this.users1.set({email: 'franz.irnberger@gmail.com'});
    this.users1.update({adress: 'Wien'});


    //
    // const users1 = this.af.database.object('users');
    // users1.set(['abc', 'dfg']);
  }
}
