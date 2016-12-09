let projectSourceFirebase: { type:  'firebase' };
let projectSourceMockdata: { type:  'mockdata' };

export let config = {
  // projectSource: projectSourceFirebase,
 // projectSource: { type:  'mockdata', mockDataUrl: './app/shared/mockdata/data/vwl-diskussion.json' },
  projectSource: { type:  'firebase', mockDataUrl: './app/shared/mockdata/data/vwl-diskussion.json' },
 projectSource1: projectSourceMockdata
}
