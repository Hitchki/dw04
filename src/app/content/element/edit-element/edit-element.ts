export class EditElement {
  constructor() {
  }

  onInsertNode(editNode) {
    console.log('onInsertNode', editNode);
    let newNode = prompt('insert new node');
    editNode.dwNodes.splice(editNode.index, 0, newNode);
  }

  onDeleteNode(editNode) {
    // alert('onDeleteNode');
    let countDelete: number = 1;
    editNode.dwNodes.splice(editNode.index, countDelete);
  }

  onAddNodeLevel(editNode) {
    // alert('onAddNodeLevel');
    console.log('onInsertNode', editNode);
  }
}
