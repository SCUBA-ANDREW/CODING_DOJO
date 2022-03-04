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
      let isInserted = false;
      let newNode= new Node(newVal);
      if(this.root === null) {
        this.root = newNode; 
        return
      }
      let current = this.root;
      while(isInserted === false) {
        if(newVal < current.data) {
          if(current.left === null) {
            current.left = newNode
            isInserted = true
          }
            current = current.left;
        } else {
          if(current.right === null) {
            current.right = newNode
            isInserted = true
          }
          current = current.right;
        }      
      }
    }
  // remember to run in the shell, not console
    size(curr = this.root){
      // counts the total number of nodes in this tree.
      if(this.root==null){
        return 0;
      }
      else if(curr.left==null&&curr.right==null){
        return 1;
      }
      else if(curr.left&&!curr.right){
        return 1+this.size(curr.left);  
      }
      else if(curr.right&&!curr.left){
        return 1+this.size(curr.right);
      }
      else{
        return this.size(curr.left) + this.size(curr.right) + 1;
      }
    }
    height(curr = this.root){
      // Calculates the height of the tree based on how many nodes from top to bottom (whichever side is taller).
      let leftDepth = 0;
      let rightDepth = 0;
      if(this.root == null){
        return 0;
      }
      if(curr.right){
        rightDepth = 1 + this.height(curr.right); 
      }
      if(curr.left){
       
        leftDepth = 1 + this.height(curr.left);
      }
      if(!curr.right&&!curr.left){
        return 1;
      }
  
      if(rightDepth <= leftDepth){
        return leftDepth;
      } else {
        return rightDepth;
      }
    }
    // BONUS: check if the tree has equal height on both left and right sides
    isBalanced(curr = this.root){
      // 
  
      let leftLeaf=this.height(curr.left);
      let rightLeaf=this.height(curr.right);
      if(leftLeaf==rightLeaf){
        return true;
      }else{
        return false;
      }
        
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
  
  
  const threeLevelTree = new BinarySearchTree();
  threeLevelTree.insert(10);
  threeLevelTree.insert(5);
  threeLevelTree.insert(15);
  threeLevelTree.insert(2);
  threeLevelTree.insert(8);
  threeLevelTree.insert(12);
  threeLevelTree.insert(20);
  threeLevelTree.print();
  
  console.log("*****Size*****");
  console.log(threeLevelTree.size());
  console.log("*****Height*****");
  console.log(threeLevelTree.height());
  console.log("*****isBalaced*****");
  console.log(threeLevelTree.isBalanced());