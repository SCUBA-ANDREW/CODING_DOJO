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
  //create new node with the "data"  
  //while loop to find last node
  //
    insertAtBack(data){
          // Create a new node with the given value and inserts it at the back of the list
          // HINT: How to find the last node of a Singly Linked List?
          var newNode = new Node(data); 
          if(!this.head){
            this.head = newNode;
          } else {
            let runner = this.head;
            while(runner.next !== null) {
              runner = runner.next;
            }  
            runner.next = newNode;
          }
    }
  
    removeHead(){
          // Remove the head (HINT: What will be the new head?)
          let prevHead = this.head;
          this.head = this.head.next;
          prevHead.next = null;
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
  
  var list2 = new SLL();
  list2.head = node1;  
  
  list1.printList();
  list2.printList();
  console.log("*****************");
  list2.removeHead();
  list2.printList();
  console.log("*****************");
  list2.insertAtBack(4);
  list2.printList();