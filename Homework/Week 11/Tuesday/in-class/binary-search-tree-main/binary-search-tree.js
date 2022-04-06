// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    // Your code here
    let newNode = new TreeNode(val);
    // if tree is empty
    // this.root = newNode
    if (!currentNode) this.root = newNode;
    else {

      
      // if new node already exists in the tree
      // if the next value of the current node is null,
      // then we insert the newNode
      // if (newNode.val > currentNode.val && currentNode.right === null)
      //   currentNode.right = newNode;
      
      // if (newNode.val < currentNode.val && currentNode.left === null)
      //   currentNode.left = newNode;
      
      // // check if new node is larger or smaller than the root node
      // // if new node is larger than the root node, traverse left
      // if (newNode.val > currentNode.val) {
      //   return this.insert(val, currentNode.right);
      // }

      // // else if new node is smaller than the root node
      // if (newNode.val < currentNode.val) {
      //   return this.insert(val, currentNode.left);
      // }
      // else if tree is not empty:
      if (newNode.val > currentNode.val) 
        !currentNode.right ? currentNode.right = newNode : this.insert(val, currentNode.right);
      else
        !currentNode.left ? currentNode.left = newNode : this.insert(val, currentNode.left);
      

    }
  }

  search(val) {
    // Your code here
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // Your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // Your code here
  }
}

module.exports = { BinarySearchTree, TreeNode };
