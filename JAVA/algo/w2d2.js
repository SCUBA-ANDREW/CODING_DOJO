class Node{
	constructor(data){
		this.data = data;
		this.next = null;
	}
}

class SLLQueue{
	constructor(){
		this.front = null;
		this.rear = null;

	}

	isEmpty(){
		// check if the queue is empty
	}

	getFront(){
		//return the front
	}
	enqueue(data){
		// construct a new node and add to the current queue
	}

	dequeue(){
		// remove and return from the front of the queue
	}

	contains(target) {
    // check if the queue contains the target
  	}

  	printQueue(){ //for learning puspose
		console.log("Front: " + this.front.data);
		var runner = this.front;
		while(runner){
			console.log(runner.data)
			runner= runner.next;
		}
		console.log("Rear: " +this.rear.data);
	}
}


var q = new SLLQueue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.enqueue("d");
q.printQueue(); //expected: front: "a", rear : "d"

q.dequeue(); 
q.printQueue(); //expected: front: "b", rear : "d"


