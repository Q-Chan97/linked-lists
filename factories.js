class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    toString() {
        let current = this.head;
        let string = "";

        while (current !== null) {
            string+=`(${current.value}) -> `;
            current = current.nextNode;
        }

        if (current === null) {
            string += "null";
        }
        return string;
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

    at(index) {
        if (index < 0 || index >= this.size) return null; // Guard in case index size doesn't exist

        let counter = 0;
        let current = this.head; // Starts counting at the head node

        while (counter < index) { // Only goes up to index passed in
            current = current.nextNode; // Advances through list
            counter++; // Increase counter up to index
        }

        return current; // Returns data
    }

    pop() {
        let current = this.head;

        if (this.size === 0) { // Return null for empty list
            return null;
        }

        if (this.size === 1) { // Removes node in a one node list
            let removedNode = this.head; // Captures head node before removal
            this.head = null;
            this.tail = null;
            this.size--; // Reduce size of list to 0
            return removedNode; // Returns removed node
        } else {
            while (current.nextNode !== this.tail) {
                current = current.nextNode;
            } 

            let removedNode = this.tail; // Captures last node in list
            this.tail = current; // New tail is current node
            this.tail.nextNode = null; // Set tail's next node to be null;
            this.size--; // Reduce size of list by 1

            return removedNode; // Returns removed node
        }
    }
}