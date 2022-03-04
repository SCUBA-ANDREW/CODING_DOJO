/**
http://btv.melezinek.cz/binary-search-tree.html.
 */
class Node {
    /**
     * Constructs a new instance of a BST node.
     * @param {number} data The integer to store in the node.
     */
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(newVal){
    // construct a new node and insert into the current tree
      let newNode = new Node(newVal);
      let current = this.root;
      let found = false;
  
      // if its empty return false
      if (this.root === null) {
              return null;
          }
  
      // while loop
      while(current.data != newVal){
  
        // if less than go left
        if(newVal < current.data){
          if(current.left == null){
            current.left = newVal; 
          }
          current = current.left;
        } 
  
        // if greater than go right
        if(newVal > current.data){
          current = current.right;
  
          if(current.data == null){
            current = newVal; 
          }
        }
      }
    }
     
      
      
  
    insertRecursive(newVal, curr = this.root){
      // insert using recursive
    }
  
    isSymmetric(curr = this.root){
      // BONUS: check if the tree is symmetric
      //https://leetcode.com/problems/symmetric-tree/ 
    }
  
    
    // Logs this tree horizontally with the root on the left.
    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
      if (!node) {
        return;
      }
  
      spaceCnt += spaceIncr;
      this.print(node.right, spaceCnt);
  
      console.log(
        " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
          `${node.data}`
      );
  
      this.print(node.left, spaceCnt);
    }
  }
  
  const emptyTree = new BinarySearchTree();
  const oneNodeTree = new BinarySearchTree();
  oneNodeTree.root = new Node(10);
  
  
  /* twoLevelTree
          root
          10
        /   \
      5     15
  */
  const twoLevelTree = new BinarySearchTree();
  twoLevelTree.root = new Node(10);
  twoLevelTree.root.left = new Node(5);
  twoLevelTree.root.right = new Node(15);
  // twoLevelTree.print();
  
  
  /* threeLevelTree
                      root
                  <-- 10 -->
                /            \
              5             15
            /    \         /    \
          2       8      12     20
                 /
                7
  */
  
  
  
  const threeLevelTree = new BinarySearchTree();
  threeLevelTree.root = new Node(10);
  threeLevelTree.root.left = new Node(5);
  threeLevelTree.root.right = new Node(15);
  threeLevelTree.root.left.left = new Node(2);
  threeLevelTree.root.left.right = new Node(8);
  threeLevelTree.root.right.left = new Node(12);
  threeLevelTree.root.right.right = new Node(20);
  threeLevelTree.insert(7); 
  threeLevelTree.print();
  
  // let threeLevelTree = new BinarySearchTree();
  // threeLevelTree.insert(10);
  