
import { Injectable } from '@angular/core';
import {RoutePathItem, RoutePath, ContentPathItem, ContentPath, ContentNodes} from "./content-nodes";

@Injectable()
export class ContentNodesService {
  private contenPathNodes: any[];

  constructor() { }

  getPathItems(contentNodes: ContentNodes, path: RoutePath) {
    var pathLevel = pathLevel ? pathLevel + 1 : 0;
    var contentPathItems: ContentPath = contentPathItems ? contentPathItems : [];
    // if (!contentNodes || !path || !path[pathLevel] || !contentNodes[path[pathLevel]]) {
    if (!contentNodes || !path || !path[pathLevel]) {
      return contentPathItems;
    } else {
      let selectedNodeIndex = path[pathLevel].selectedIndex;
      let partialRoute = path[pathLevel].partialRoute;
      let contentNode: any = contentNodes[selectedNodeIndex];
      let nextLevelContentNodes = contentNode[selectedNodeIndex][partialRoute];
      contentPathItems.push(this.getPathItem(contentNode, partialRoute, selectedNodeIndex));
      this.getPathItems(nextLevelContentNodes, path);
    }
  }

  getPathItem(contentNodes: ContentNodes, routeType: string, selectedNodeIndex) {
    var pathItem: ContentPathItem = {type: routeType, contentNodes: contentNodes, selectedIndex: selectedNodeIndex};
    return pathItem;
  }

}
