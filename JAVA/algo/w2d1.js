//ref:
//https://isaaccomputerscience.org/concepts/dsa_datastruct_stack?examBoard=all&stage=all

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Stack{
    constructor(){
      this.top=null;
    }
  
    isEmpty(){
      //check if the stack is empty
      //return a boolean 
    }
  
    push(data){
      //create a node from the data
      // add the new node to the stack (the top)
    }
  
    pop(){
      // remove and return the item 
      // remove the top
    }
  
    peek(){
      //return the top item without removing it
    }
  
    size(){
      //return the size of the stack
    }
  
    printStack(){ // For learning purpose
      console.log("TOP")
      let runner = this.top;
      while(runner){
        console.log(runner.data);
        runner= runner.next
      }
    }
  }
  
  let s1 = new Stack();
  s1.push(1);
  s1.push(2);
  s1.push(3);
  s1.printStack(); 
  //expected:
  // TOP
  // [ 3 ] 
  // [ 2 ]
  // [ 1 ]
  
  console.log(s1.pop()); //expected: [ 3 ]
  s1.printStack();
  //expected: 3
  // TOP
  // [ 2 ] 
  // [ 1 ]
  