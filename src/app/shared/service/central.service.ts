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

@Injectable()
export class CentralService {

  private pathNodes: PathNodes;
  private userId;
  private isOwner = true;

  constructor(
    private contentLoadService: ContentLoadService
  ) {
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

  buildPathNodes(fragment:string) {
    // let partialFragments = fragment.split('/');

    let partialFragments = fragment.match(/[^/]+,[^/]+/g);

    // var text='string1, string2, string3, string4, string5, string 6';
    // result=text.match(/[^,]+,[^,]+/g);

    // let xx = this.getPathNodes(partialFragments, projects);
  }

  getPathNodes(pf, dwNodes) {
    var pfi = pfi ? pfi + 1 : 0;   //pfi...partialFragmentIndex
    var pathNodes = pathNodes ? pathNodes : [];
    // if (!dwNodes || !path || !path[pfi] || !dwNodes[path[pfi]]) {
    if (!dwNodes || !pf || !pf[pfi]) {
      console.log('nix params');
      return pathNodes;
    } else {
      let selectedNodeIndex = pf[pfi].selectedIndex;
      let partialRoute = pf[pfi].partialRoute;
      let contentNode: any = dwNodes[selectedNodeIndex];
      let nextLevelContentNodes = contentNode[selectedNodeIndex][partialRoute];
      pathNodes.push(this.getSinglePathNode(contentNode, partialRoute, selectedNodeIndex));
      this.getPathNodes(pf, nextLevelContentNodes);
    }
  }

  getSinglePathNode(dwNodes, partialRoute, selectedNodeIndex) {
    var pathItem = {type: partialRoute, dwNodes: dwNodes, selectedIndex: selectedNodeIndex};
    return pathItem;
  }
}
