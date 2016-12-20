export class EditElement {
  constructor() {
  }

  onInsertNode(editNode) {
    alert('onInsertNode');
    let nodes = [];
    let index: number = 0;
    let newNode: any = {};
    nodes.splice(index, 0, newNode);
  }

  onDeleteNode() {
    alert('onDeleteNode');
    let nodes = [];
    let index: number = 0;
    let countDelete: number = 1;
    nodes.splice(index, countDelete);
  }

  onAddNodeLevel() {
    alert('onAddNodeLevel');
  }
}
