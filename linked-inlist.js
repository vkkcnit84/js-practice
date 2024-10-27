class Node {
    constructor(value) {
      this.value = value;       // Data stored in the node
      this.next = null;         // Pointer to the next node
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;         // First node in the list
    }
  
    append(value) {
      const newNode = new Node(value);
      
      if (!this.head) {
        this.head = newNode;    // If list is empty, set the first node
        return;
      }
      
      let current = this.head;
      while (current.next) {    // Traverse to the end of the list
        current = current.next;
      }
      current.next = newNode;   // Add the new node to the end
    }

    printList() {
        let current = this.head;   // Start at the head node
        while (current) {
          console.log(current.value);  // Print the value of the current node
          current = current.next;      // Move to the next node
        }
      }
  }
  
  const list = new LinkedList();
  list.append(1);
  list.append(22);
  list.append(3);

  list.printList();

  console.log(list)
  