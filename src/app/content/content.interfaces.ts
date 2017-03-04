import {PathNodes, PathNode} from '../core/central-services/path-node.interface'

export interface PathData {
  pathNodes?: PathNodes;
  selectedPathNode?: PathNode;
  selectedPathNodeIndex: number;
}

export interface CompVM {
  pathData: PathData;
  action?: string;
  isEditMode?: boolean;
}