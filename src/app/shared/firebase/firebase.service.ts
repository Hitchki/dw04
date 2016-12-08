import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class FirebaseService {

  constructor() { }

  loadProjects(userId: string):Observable<any> {
    return Observable.from(['observable in firebase-load-service from User: ' + userId]);
  }

}
