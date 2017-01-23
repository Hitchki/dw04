import { Injectable } from '@angular/core';
import {ConfigService} from "../../config/config.service";
import {Observable} from "rxjs";
import {ContentLoadService} from "../content-load/content-load.service";

@Injectable()
export class ProjectsService {
  private data: any;
  private path: any;
  private contentNodes: any = undefined;

  constructor(
    private configService: ConfigService,
    private contentLoadService: ContentLoadService,
  ) {
  }

  loadProjects(projectUrl: string):Observable<any> {
    // this.getPathItems(this.data, this.path, this.contentNodes)
    return this.contentLoadService.loadProjects(projectUrl);
    // return Observable.from(['observable in projectsService from projectUrl: ' + projectUrl]);
  }

  saveProjects(userId: string, data: any):any {
    return this.contentLoadService.saveProjects(userId, data);
  }

}
