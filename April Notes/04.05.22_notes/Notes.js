
class TreeNode{
  constructor(val) {
    this.val = val;
    this.left = null = this.right;
  }
}

function linkedListSearch(linkedList, target) {
  // base case: empty list
  if (!linkedList.head) return false;

  // check if current node's value matches the target
  if (linkedList.head.value === target) return true;

  // if not, recursively search the rest of the list
  return linkedListSearch(linkedList.head.next, target);
}

function binaryTreeSearch(root, target) {
  // Base case: If the tree is null, return false
  if (!root) return false;

  // If the current node's value equals the target, return true
  if (root.value === target) return true;

  // Otherwise, search the left subtree for the target
  if (binaryTreeSearch(root.left, target)) return true;

  // If value isn't in the left subtree, try the right subtree
  return binaryTreeSearch(root.right, target);
}

function binaryTreeSum(root) {
  // base case: if tree is null, return 0
  if (!root) return 0;

  // recursively sum up left and right trees
  const leftSum = binaryTreeSum(root.left);
  const rightSum = binaryTreeSum(root.right);

  // return values plus left and right totals
  return root.value + leftSum + rightSum;
}

// Breadth-first traversal:
function breadthFirstTraversal(root) {
  // 1. Put starting node in a queue
  const queue = new Queue();
  queue.enqueue(root);

  // 2. While queue is not empty, repeat step 3-4
  while (queue.size > 0) {

    // 3. Dequeue a node and print it
    let node = queue.dequeue();
    console.log(node.value);
  
    // 4. Put all of the node's children in the back of the queue
    queue.enqueue(node.left);
    queue.enqueue(node.right);
  }
}

// depth-first traversal using stack:
// 1. Put starting node on a stack
// 2. While stack is not empty, repeat step 3-4
// 3. Pop a node and print it
// 4. Put all of the node's children on top of the stack
function depthFirstTraversal(root) {
  // Put starting node on a stack
  const stack = [];
  stack.push(root);

  // While stack is not empty
  while (stack.length > 0) {

    // Pop node and print it
    let node = stack.pop();
    console.log(node.value);

    // Put all of the node's children on top of the stack
    stack.push(node.right);
    stack.push(node.left);
  }
}

function recursiveSearchBST(root, target) {
  if (root === null) return false;
  
  if (root.value === target) return true;

  if (target < root.value) return recursiveSearchBST(root.left, target);
  
  if (target > root.value) return recursiveSearchBST(root.right, target);
}


// iterative search binary search tree
function searchBST(root, target) {
  let current = root;
  while (current !== null) {
    if (target === current.value) return true;
    else if (target < current.value) current = current.left;
    else if (target > current.value) current = current.right;
  }

  return false; 
}
