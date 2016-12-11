export interface ContentPathItem {
  type: string;
  selectedIndex: number;
  contentNodes: any[];
}

export interface RoutePathItem {
  partialRoute: string;
  selectedIndex: number;
}

export type RoutePath = RoutePathItem[];
export type ContentPath = ContentPathItem[];
export type ContentNodes = any[];
