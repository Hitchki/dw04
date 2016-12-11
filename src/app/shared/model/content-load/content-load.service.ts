import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ConfigService} from "../../config/config.service";
import {FirebaseService} from "../../firebase/firebase.service";
import {MockdataService} from "../../mockdata/mockdata.service";

@Injectable()
export class ContentLoadService {
  private config: any;

  constructor(
    private configService: ConfigService,
    private firebaseService: FirebaseService,
    private mockdataService: MockdataService,
  ) {
    this.config = this.configService.config;
  }

  loadProjects(userId: string, useMockdata?: true, useMockdataUrl?: string):Observable<any> {
    if (this.config.projectSource.type === 'mockdata' || useMockdata) {
      let mockDataUrl = useMockdataUrl ? useMockdataUrl :this.config.projectSource.mockDataUrl;
      return this.mockdataService.loadProjects(mockDataUrl);
    } else {
      this.firebaseService.loadProjects(userId);
      return Observable.from(['observable in content-load-service from User: ' + userId]);
    }
  }

  saveProjects(userId: string, data: any):any {
    return this.firebaseService.saveProjects(userId, data);
  }
}
