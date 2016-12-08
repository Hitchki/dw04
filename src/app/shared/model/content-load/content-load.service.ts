import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ConfigService} from "../../config/config.service";
import {FirebaseService} from "../../firebase/firebase.service";
import {MockdataService} from "../../mockdata/mockdata.service";

@Injectable()
export class ContentLoadService {

  constructor(
    private configService: ConfigService,
    private firebaseService: FirebaseService,
    private mockdataService: MockdataService,
  ) { }

  loadProjects(userId: string):Observable<any> {

    if (this.configService.config.projectSource.type === 'mockdata') {
      let mockDataUrl = this.configService.config.projectSource.mockDataUrl;
      return this.mockdataService.loadProjects(mockDataUrl);
    } else {
      this.firebaseService.loadProjects(userId);
      return Observable.from(['observable in content-load-service from User: ' + userId]);
    }

  }
}
