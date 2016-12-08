export interface ContentPathItem {
  indexName: string;
  pos: number;
}

export interface DwProjects {
  projects: DwProject[]
}

interface DwProject {
  properties: {
    title: string;
    description: string;
  };
  subprojects: DwSubProject[]
}

interface DwSubProject {
  properties: {
    title: string;
    description: string;
  };
  // subprojects: DwSubProject[]
  startcontent: DwContent[]
}

export interface DwContent {
  normtext?: DwNormtext;
  searchtree?: DwSearchtree
}

export interface DwNormtext {
  [index: number]: DwNormtextItem;
}

export interface DwNormtextItem {
  text: string;
}

export interface DwSearchtree {

}
