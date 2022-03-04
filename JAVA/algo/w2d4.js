class Node{
	constructor(data){
		this.data = data;
		this.next = null;
	}
}

class SLLStack {
    constructor() {
        this.top = null; 
    }
    // add to top
    push(data) {
        let newNode = new Node(data);
        if (this.top === null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
    }

    pop() {
        if (this.top === null) return null;
        var removed = this.top; 
        this.top = this.top.next; 
        removed.next = null; 
        return removed.data; 
    }

    peek() {
        return this.top.data;
    }

    printStack(){
      // print every node in the stack (hint: by using push() and pop()
      // make sure the original stack is back to the original state
    }

    copyStack(){
      //create a second stack and copy values from the first stack into the second stack, so they are in the same order. 
    }

}


class SLLQueue{
	constructor(){
		this.front = null;
		this.rear = null;

	}


	isPalindrome(){
		//Determine if the queue is a palindrome (same items forward and backwards)
		// Use only 1 stack as additional storage, no other arrays or objects
    // tacocat
	}


	getFront(){
		if(this.front){
			return this.front.data;
		}else{
			return null;
		}
		//return the front
	}

	getRear(){
		if(this.rear){
			return this.rear.data;
		}else{
			return null;
		}
		//return the front
	}

  enqueue(data){
        // construct a new node and add to the current queue
        var node = new Node(data);
        if (this.front == null) {
          this.front = node;
          this.rear = node;
        } else {
          this.rear.next = node;
          this.rear = node;
        }
    }

	dequeue(){
		// remove and return from the front of the queue
	    if (!this.front) {
	      return null;
	    }

	    const dequeued = this.front;
	    this.front = this.front.next;

	    if (this.front === null) {
	      this.rear = null;
	    }
	    return dequeued.data;		
	}

	isEmpty(){
	    if(this.front){
	      return false;
	    }else{
	      return true;
	    }
		// check if the queue is empty
	}

  printQueue(){ 
    console.log("Front: "+ this.getFront());
    console.log("Rear: "+ this.getRear());
    var tempQ = new SLLQueue();
    while(!this.isEmpty()){
      var tempData = this.dequeue();
      tempQ.enqueue(tempData);
      console.log(tempData);
    }
    while(!tempQ.isEmpty()){
      var tempData = tempQ.dequeue();
      this.enqueue(tempData);
    }

  }

}


var q1 = new SLLQueue();
q1.enqueue("a");
q1.enqueue("b");
q1.enqueue("c");
q1.enqueue("d");
q1.printQueue();
