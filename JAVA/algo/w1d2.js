// class Node singly link list
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
  
    isEmpty(){
      // check if the SLL is empty
      if(this.head === null){
        return true;
      } else {
        return false;
      }
    }
    
    insertAtFront(data){
      // instantiate a new node with the data
      // set head to the new node
      // if there is a head, set head to the original head
      const newNode = new Node(data);
      if(!this.isEmpty()){
        newNode.next = this.head;
      }
      this.head = newNode;
    }
  
    // bonus
    arrToList(arr){
      //Add all the items of an array to the back of the list
      
    }
  
    //given
    printList(){
      if(!this.head){
          console.log("Empty list");
          return
      }
      var runner = this.head;
      while(runner){ // while(runner != null)
          console.log(runner.data);
          runner = runner.next;            
      }
    }
  }
  
  
  // FOR LEARNING PURPOSE ONLY
  var node1 = new Node(1);
  var node2 = new Node(2);
  var node3 = new Node(3);
  node1.next = node2;
  node2.next = node3;
  // ----- END ------ 
  
  var list1 = new SLL();
  // console.log(list1);
  
  var list2 = new SLL();
  list2.head = node1;
  // console.log(list2);
  
  
  list1.printList();
  // list2.printList();
  
  // console.log(list1.isEmpty()) //-- expected true
  // console.log(list2.isEmpty()) //-- expected false
  
  list1.insertAtFront("Hello");
  list1.insertAtFront(10);
  list1.insertAtFront(true);
  
  list1.printList();
  
  
  