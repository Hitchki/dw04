// e.g. userFragment: franz/projects/0/subprojects/0
// e.g. projectsFragment: projects/0/subprojects/0
export type PathNodes = PathNode[];
export interface PathNode {
  projectsFragment: string;
  userFragment: string;
  editFragment: string;
  firebaseFragment: string;
  partialFragment: string;
  type: string;
  nodes: any[];
  selectedNode: any;
}

export type FragmentsHelpers = {nodesCons: string[], nodesInds: number[], };
