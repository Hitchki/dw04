import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {ConfigService} from "../config/config.service";
import {Observable} from "rxjs";

@Injectable()
export class MockdataService {
  // private mockDataUrl: string;

  constructor(
    private configService: ConfigService,
    private http: Http,
  ) {
    // console.log(this.configService);
  }

  loadProjects(mockDataUrl: string):Observable<any> {

    let result = this.http.get(mockDataUrl);
    // result.subscribe(  // nur zum Debuggen
    //   arg => console.log(arg.json()),
    //   err => console.log(err)
    // );
    return result;

    // return Observable.from(['observable in content-load-service from User: ' + userId]);
  }

}
