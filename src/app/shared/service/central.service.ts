import { Injectable } from '@angular/core';
import {ContentLoadService} from "../model/content-load/content-load.service";
import {Observable} from "rxjs";

// e.g. userFragment: franz/projects/0/subprojects/0
// e.g. projectsFragment: projects/0/subprojects/0
type PathNodes = PathNode[];
interface PathNode {
  projectsFragment: string;
  userFragment: string;
  editFragment: string;
  firebaseFragment: string;
  partialFragment: string;
  type: string;
  nodes: any[];
  selectedNode: any;
}

type FragmentsHelpers = {nodesCons: string[], nodesInds: number[], };


@Injectable()
export class CentralService {

  private pathNodes: PathNodes;
  private userId;
  private isOwner = true;

  constructor(
    private contentLoadService: ContentLoadService
  ) {}

  getNormalizedFragment(fragment:string){
    return fragment.replace(/\/\//g, '/');
  }

  getFragmentsArray(normalizedFragment:string){
    return normalizedFragment.split('/');
  }

  getNodesArrays(fragmentsArray: any[]) {
    let fragmentsHelpers: FragmentsHelpers;
    fragmentsHelpers.nodesCons = fragmentsArray.filter((ele, ind) => !(ind%2));
    fragmentsHelpers.nodesInds = fragmentsArray.filter((ele, ind) => ind%2).map(index=>+index);
    return fragmentsHelpers;
  }


  buildPathNodes(fragment:string) {
    let normalizedFragment = this.getNormalizedFragment(fragment);
    let fragmentsArray = this.getFragmentsArray(normalizedFragment);
    // let nodesCons = fragmentsArray.filter((ele, ind) => !(ind%2));
    // let nodesInds = fragmentsArray.filter((ele, ind) => ind%2 );

    let fragmentsHelpers = this.getNodesArrays(fragmentsArray);

    let dwNodes=[];
    let pathNodes = this.getPathNodes(dwNodes, fragmentsHelpers.nodesCons, fragmentsHelpers.nodesInds);
  }

  getPathNodes(dwNodes, nodesCons, nodesInds) {
    // 'use strict';
    var pi = pi ? pi + 1 : 0;   //pi...pathIndex
    var pathNodes = pathNodes ? pathNodes : [];
    // var partialFragment = pf[pi].partialRoute;

    if (pi === nodesCons.length) {
      // pathNodes.push(getSinglePathNode());
      return pathNodes;
    } else {
      let selectedNodeIndex = nodesInds[pi];
      let selectedNode = dwNodes[selectedNodeIndex];
      let conNode = nodesCons[pi];
      dwNodes = dwNodes[conNode];

      this.getPathNodes(dwNodes, nodesCons, nodesInds);
    }
  }

  getSinglePathNode(dwNodes, partialRoute, selectedNodeIndex) {
    var pathItem = {type: partialRoute, dwNodes: dwNodes, selectedIndex: selectedNodeIndex};
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
