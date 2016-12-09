import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFire, AngularFireDatabase} from "angularfire2";

@Injectable()
export class FirebaseService {

  constructor(
    private db: AngularFireDatabase
  ) {
  }

  loadProjects(userId: string):Observable<any> {
    return this.db.list(userId);
    // return Observable.from(['observable in firebase-load-service from User: ' + userId]);
  }

  saveProjects(userId: string, data: any):any {
    // return Observable.fromPromise(this.db.object(userId).set('abcd'));
    return this.db.object(userId).set('abcd');
    // return this.db.list(userId);
    // return Observable.from(['observable in firebase-load-service from User: ' + userId]);
  }

}
