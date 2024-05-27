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

    display() {
        let result = '';
        let current = this.head;
        while (current) {
            result += current.data;
            if (current.next) {
                result += ', ';
            }
            current = current.next;
        }
        return result;
    }
}

// Test cases
const SLL1 = new SLL();
SLL1.addFront(76);
SLL1.addFront(2);
console.log(SLL1.display()); // "2, 76"

SLL1.addFront(11.41);
console.log(SLL1.display()); // "11.41, 2, 76"
