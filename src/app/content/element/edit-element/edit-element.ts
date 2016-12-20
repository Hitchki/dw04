export class EditElement {
  constructor() {
  }

  onInsertNode(editNode) {
    console.log('onInsertNode', editNode);
    let newNode = prompt('insert new node');
    editNode.nodes.splice(editNode.index, 0, newNode);
  }

  onDeleteNode(editNode) {
    alert('onDeleteNode');
    // let nodes = [];
    // let index: number = 0;
    let countDelete: number = 1;
    editNode.nodes.splice(editNode.index, countDelete);
  }

  onAddNodeLevel() {
    alert('onAddNodeLevel');
  }
}
