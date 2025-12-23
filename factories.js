class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        let newNode = new Node(value);

        if (this.size === 0) {
            this.head = newNode; // Both head and tail are the same node in a new list
            this.tail = newNode;
        } else {
            this.tail.nextNode = newNode; // Connect previous tail
            this.tail = newNode; // Actually adds new node as tail
        }
        this.size++; // Increase list size
    }

    prepend(value) {
        let newNode = new Node(value);

        if (this.size === 0) { // If list size is 0, operates the same way as append method
            this.head = newNode; 
            this.tail = newNode;
        } else {
            newNode.nextNode = this.head; // Connects old head 
            this.head = newNode; // Add new node as head
        }
        this.size++; // Increase list size
    }
}