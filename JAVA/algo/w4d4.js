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
  
    printInorder(curr = this.root){
      if(!curr){
        return;
      }
      if(curr){
        this.printInorder(curr.left);
        console.log(curr.data);
        this.printInorder(curr.right);
      } 
    }
  
    printPreorder(curr = this.root){
      if(!curr){
        return;
      }
      if(curr){
        console.log(curr.data);
        this.printInorder(curr.left);
        this.printInorder(curr.right);
      } 
    }
  
    printPostorder(curr = this.root){
      if(!curr){
        return;
      }
      if(curr){
        this.printInorder(curr.left);
        this.printInorder(curr.right);
        console.log(curr.data);
      } 
    }
  
    
    toArrPreorder(curr = this.root, arr=[]){
      // Converts this BST into an array following Depth First Search preorder.
      // expected array [10,5,2,8,15,12,20]
      if(!curr){
        return;
      }
      if(curr){
        arr.push(curr.data);
        this.toArrPreorder(curr.left, arr);
        this.toArrPreorder(curr.right,arr);
      }
      return arr;
    }
      
  
    toArrInorder(curr = this.root, arr=[]){
      // Converts this BST into an array following Depth First Search inorder.
      // expected array [2,5,8,10,12,15,20]
  
      // if current doesn't exist, return
      // if it does, do left, root, right
      // recursive call to left
      // add root (curr) to array
      // recursive call to right
      // return your array at some point
  
      if(!curr){
        return;
      }
      if(curr){
        this.toArrInorder(curr.left, arr);
        arr.push(curr.data);
        this.toArrInorder(curr.right,arr);
      }
      return arr;
    }
      
  
    toArrPostorder(curr = this.root, arr=[]){
      // Converts this BST into an array following Depth First Search postorder.
      // expected array [2,8,5,12,20,15,10]
  
      // same as inorder, but left, right, root
      if(!curr){
        return;
      }
      if(curr){
        this.toArrPostorder(curr.left, arr);
        this.toArrPostorder(curr.right,arr);
        arr.push(curr.data);
      }
      return arr;
    }
  
    //HEY HEIDIIIIIIIII!!!!!!!!!!!!!
    
  
    
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
  
  
  // threeLevelTree.printInorder();
  // threeLevelTree.printPostorder();
  // console.log("***ArrInorder***");
  // console.log(threeLevelTree.toArrInorder())
  console.log("***ArrPreorder***");
  console.log(threeLevelTree.toArrPreorder())
  // console.log("***ArrPostorder***");
  // console.log(threeLevelTree.toArrPostorder())
  