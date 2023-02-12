class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class linkedList {
    constructor() {
      this.end = null;
      this.start = null
    }
  
    add(value) {
      // create a new node using our Node class from before
      const newNode = new Node(value);
      // edge case: linkedList is empty
      if (!this.start) {
        // set the head of the linkedList to the new node
        this.end = newNode;
        this.start = newNode
      } else {
        // find the current head node
        // reassign the head to our new node
        this.end.next = newNode;
        // set its next pointer to the current head
        this.end= newNode;
        
      }
    }
  } 
 let hello = new linkedList()
 for(let i = 0; i<5; )
 
 hello.add(5)
 hello.add(15)
 hello.add(52)
 hello.add("test")

 hello.print()
