class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    removeFront() {
        if (!this.head) {
            return null;
        }
        const removedNode = this.head;
        this.head = this.head.next;
        return removedNode;
    }

    front() {
        return this.head ? this.head.data : null;
    }

    contains(value) {
        let current = this.head;
        while (current) {
            if (current.data === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    length() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }
}

// Test cases
const SLL1 = new SLL();
SLL1.addFront(18);
SLL1.addFront(5);
SLL1.addFront(73);

console.log(SLL1.length()); // 3
