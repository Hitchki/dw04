export class EditElement {
  constructor() {
  }

  onInsertNode(editNode) {
    console.log('onInsertNode', editNode);
    let newNodeText = prompt('insert new node');
    let newNode = {"text": newNodeText};
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
