// e.g. userFragment: franz/projects/0/subprojects/0
// e.g. projectsFragment: projects/0/subprojects/0
/*export interface PathNode {
  // projectsFragment?: string;
  //todo userFragment entfernen
  userFragment?: string;
  // editFragment?: string;
  // firebaseFragment: string;
  indexFragment?: string;
  dwNodesFragment?: string;
  fragment?: string;
  partialRoute: string;
  type: string;
  dwNodes: any[];
  selectedNode?: any;
  selectedIndex: number;
}*/

export type PathNodes = PathNode[];

export interface PathNode {
  fragment?: string;
  type: string;  // is the same as the partialFragment
  dwNodes: any[];
  selectedIndex: number;
}
