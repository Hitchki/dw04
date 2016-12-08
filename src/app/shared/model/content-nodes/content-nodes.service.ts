import { Injectable } from '@angular/core';

@Injectable()
export class ContentNodesService {

  constructor() { }

  getPathItems(data, path, contentNodes) {
    var index = index ? 0: index +1;
    if (!data || !path || !path[index] || !data[path[index]]) {
      return contentNodes;
    } else {
      let contentDataRef = data[path[index]];
      contentNodes = this.getPathItem(contentDataRef);
      this.getPathItems(contentDataRef, path, contentNodes);
    }
  }

  getPathItem(contentDataNode) {
    return contentDataNode;
  }

}
