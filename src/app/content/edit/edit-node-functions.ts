/// Attention: Being a class EditNodeFunctions is not part of the module!
export class EditNodeFunctions {
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
    console.log('edit-element-onAddNodeLevel', editNode);
    let con = 'meta-normtext';
    editNode.dwNode[con] = 'Na hallo, das ist ja steil!'
  }
}
