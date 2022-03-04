/**
 * Class to represent a Node in a Binary Search Tree (BST).
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
  
    isEmpty() {
      // determine if the BST is empty and return a boolean
      if(this.root === null) {
        return true;
      } 
      return false;
    }
  
    min(current = this.root) {
        //return the smallest integer data
        if(this.isEmpty()){
          return false;
      }
        while(current.left!=null){
          current=current.left;
        }
        return current;
      }
      
      minRecursive(current = this.root) {
        //using recursive, finding the minimum
        //a method that called itself
        if(this.isEmpty()){
            return false;
        }
        if(current.left!=null){
            return this.minRecursive(current.left);
            
        }
        else{
            return current;
        }
      
      }
      
      max(current = this.root) {
        //return the largest integer data
        if(this.isEmpty()){
          return false;
      }
        while(current.right!=null){
            current=current.right;
        }
        return current;
      }
      
      maxRecursive(current = this.root) {
          //using recursive, finding the maximum
          if(this.isEmpty()){
              return false;
          }
          if(current.right!=null){
              return this.maxRecursive(current.right);
          }
          else{
              return current;
          }
      }
  
    contains(searchVal){
      //Determine if the tree contains the given searchVal
  
    }
  
    containsRecursive(searchVal){
      //Determine if the tree contains the given searchVal using recursive
    }
  
    range(current = this.root){
      // find the range of the tree
    }
  
    // BONUS
    isFull(current = this.root){
      // check if the tree is full 
      // In a full tree, every node has both a left and a right except for the leaf nodes (last nodes)
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
  */
  
  
  
  const threeLevelTree = new BinarySearchTree();
  threeLevelTree.root = new Node(10);
  threeLevelTree.root.left = new Node(5);
  threeLevelTree.root.right = new Node(15);
  threeLevelTree.root.left.left = new Node(2);
  threeLevelTree.root.left.right = new Node(8);
  threeLevelTree.root.right.left = new Node(12);
  threeLevelTree.root.right.right = new Node(20);
  // threeLevelTree.print();