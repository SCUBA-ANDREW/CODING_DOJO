// class Node 
class Node{
    constructor(data){
      this.data = data;
      this.next = null;
    }  
  }
  
  // class SLL - Singly Linked List
  class SLL{
    constructor(){
      this.head = null;
    }
  
    insertAtBack(data){
      var newNode = new Node(data);
      if(this.head){
        var runner = this.head;
        while(runner.next){
          runner = runner.next;
        }
        runner.next = newNode;
      }else{
        this.head = newNode;
      }
    }
    //given
    printList(){
      if(!this.head){
        console.log("Empty list");
        return
      }
      var runner = this.head;
      while(runner){
        console.log(runner.data);
        runner = runner.next;
      }
    }
  
        // check if the SLL includes the given data
        // return a boolean
      contains(data){
        
  
      }
  
      // remove the last node of a SLL
      removeBack(){
      }
  
      // BONUS 
      average(){
        // loop through the SLL
        //find the average of all nodes
      }
  
      // use recursive for the contains methods
      containsRecursive(data, curr=this.head){      
  
      }
  
  
  }
  
  
  
  
  var list1 = new SLL();
  
  var list2 = new SLL();
  list2.insertAtBack(1);
  list2.insertAtBack(2);
  list2.insertAtBack(3);
  //       HEAD
  // list2: (1) --> (2) --> (3) --> null
  
  
  list1.printList();
  list2.printList();
  
  console.log(list2.contains(3)) 
  // expected result: true
  console.log(list2.contains(1000)) 
  // expected result: false