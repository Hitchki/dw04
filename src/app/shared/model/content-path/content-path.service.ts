import { Injectable } from '@angular/core';
import {RoutePath, RoutePathItem} from "../content-nodes/content-nodes";

@Injectable()
export class ContentPathService {
  public delimiter: string = '-';
  constructor() { }

  // only one delimiter
  getUrlPath(projectUrl: string): RoutePath {
    // let routePath: RoutePath;
    // let tmp = projectUrl.split(this.delimiter);
    // let partialRouteArray: string[] = tmp.filter((ele, index) => index%2 ?  false : true );
    // let selectedIndexArray: string[] = tmp.filter((ele, index)=> index%2 ?  true : false );
    //
    // // routePath = partialRouteArray.map((partRoute, index) => true ;
    // let routePathItem: RoutePathItem = {partialRoute: '', selectedIndex: undefined};
    return <RoutePath>[];
  }

  // getUrlPath1(projectUrl: string): RoutePath {
  //   let routePath: RoutePath;
  //   let tmp = projectUrl.split(this.delimiter);
  //   let partialRouteArray: string[] = tmp.filter((ele, index) => index%2 ?  false : true );
  //   let selectedIndexArray: string[] = tmp.filter((ele, index)=> index%2 ?  true : false );
  //
  //   // routePath = partialRouteArray.map((partRoute, index) => true ;
  //   let routePathItem: RoutePathItem = {partialRoute: '', selectedIndex: undefined};
  //   return <RoutePath>[];
  // }
}
