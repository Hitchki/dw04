import {PathNodes, FragmentsHelpers, PathNode} from "./central.service.interface"
import { Injectable } from '@angular/core';
import {ContentLoadService} from "../model/content-load/content-load.service";
import {Observable} from "rxjs";



@Injectable()
export class CentralService {

  private pathNodes: PathNodes;
  private userId;
  private isOwner = true;

  constructor(
    private contentLoadService: ContentLoadService
  ) {}

  getNormalizedFragment(fragment:string){
    let normFragment = fragment.replace(/\/\/+/g, '/');
    return normFragment.replace(/\/$/g, '');
  }

  getFragmentsArray(normalizedFragment:string){
    return normalizedFragment.split('/');
  }

  getNodesArrays(fragmentsArray: any[]) {
    let fragmentsHelpers: FragmentsHelpers = <FragmentsHelpers>{};
    fragmentsHelpers.nodesCons = fragmentsArray.filter((ele, ind) => !(ind%2));
    fragmentsHelpers.nodesInds = fragmentsArray.filter((ele, ind) => ind%2).map(index=>+index);
    return fragmentsHelpers;
  }


  getPathNodes(fragment:string, dwNodes?: any[]) {

    dwNodes = dwNodes ? dwNodes : [];

    let normalizedFragment = this.getNormalizedFragment(fragment);
    let fragmentsArray = this.getFragmentsArray(normalizedFragment);

    let fragmentsHelpers = this.getNodesArrays(fragmentsArray);

    let pathNodes = this.getPathNodesFRA(dwNodes, fragmentsHelpers.nodesCons, fragmentsHelpers.nodesInds);
    return pathNodes;
  }

  getPathNodesFRA(dwNodes, nodesCons: string[], nodesInds: number[], pathNodes?: PathNodes, pi?: number) {
    // 'use strict';
    var pi = (pi !== undefined) ? pi + 1 : 0;   //pi...pathIndex (=pathLevel)
    pathNodes = pathNodes ? pathNodes : <PathNodes>[];
    // var partialFragment = pf[pi].partialRoute;

    if (pi === nodesCons.length) {
      // pathNodes.push(getSinglePathNode());
      return pathNodes;
    } else {
      let partialRoute = nodesCons[pi];
      let selectedNodeIndex = nodesInds[pi];
      let selectedNode = dwNodes[selectedNodeIndex];

      let newPathNode: PathNode = this.getSinglePathNode(dwNodes, partialRoute, selectedNodeIndex);
      pathNodes.push(newPathNode);

      let conNodeProp = nodesCons[pi+1];
      let newDwNodes = selectedNode[conNodeProp];
      this.getPathNodesFRA(newDwNodes, nodesCons, nodesInds,pathNodes, pi);
    }
  }

  getSinglePathNode(dwNodes, partialRoute, selectedNodeIndex):PathNode {
    var pathItem = {type: partialRoute, dwNodes: dwNodes, selectedIndex: selectedNodeIndex, partialRoute: partialRoute};
    return pathItem;
  }


  //fragment is without userId
  getPathNodesFromFragment(fragment)  {
    let partialFragments = fragment.split('/');
    this.pathNodes = partialFragments.map((partFrag, i, partFrags) => {
      let partialFragment = (i===0) ? partFrag : `${partFrag}/${partialFragments[i-1]}`;
      return {partialFragment: partialFragment,
        userFragment: `${this.userId}/${partialFragment}`,
      };
    });

    let pathTmps = this.pathNodes.map(
      pathNode => this.contentLoadService.loadNodeByUrl(pathNode.userFragment)
    );

  }

  saveByUserFragment(fragment) { }

  testTest() {
    let pa = [{editFragment: 'vwl'}, {editFragment: 'vwl/projects'}, {editFragment: 'vwl/projects/0'}];
    // console.debug('testTest', pa);
    // console.table(pa);
    // let res = this.contentLoadService.loadNodeByUrl(pa[0].editFragment);
    // res.subscribe(
    //   (result) => console.debug('result', result)
    // );

    const arraySource = Observable.from(pa);
    arraySource.subscribe(
      (result) => {
        console.debug('result', result);
        this.contentLoadService.loadNodeByUrl(result.editFragment).subscribe(
          (data) => {
            console.debug('data', data);
          },
          (err) => console.error('err', err),
          () => console.debug('end')
        );
      }
    );

    // let erg: any[] = [];
    //
    // arraySource.flatMap(
    //   item => this.contentLoadService.loadNodeByUrl(item.editFragment)
    // )
    // .combineAll()
    // .subscribe(
    //     data => {
    //       console.log('dataxxx', data);
    //       erg.unshift(erg);
    //     },
    //     (err) => console.error('err', err),
    //     () => console.debug('end')
    // );
  }
}
