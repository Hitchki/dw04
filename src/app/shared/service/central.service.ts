import { Injectable } from '@angular/core';

type PathNodes = PathNode[];

interface PathNode {
  fragmentUrl: string;

}

@Injectable()
export class CentralService {

  public pathNodes: any;

  constructor() {

    this.pathNodes = [

    ];
  }

  getPathNodesFromFragment() {
    
  }

}
