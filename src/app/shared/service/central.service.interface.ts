// e.g. userFragment: franz/projects/0/subprojects/0
// e.g. projectsFragment: projects/0/subprojects/0
export type PathNodes = PathNode[];
export interface PathNode {
  projectsFragment?: string;
  userFragment?: string;
  // editFragment?: string;
  // firebaseFragment: string;
  partialRoute: string;
  type: string;
  dwNodes: any[];
  selectedNode?: any;
  selectedIndex: number;
}

export type FragmentsHelpers = {nodesCons: string[], nodesInds: number[], };
