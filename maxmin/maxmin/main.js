class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    max() {
        if (!this.head) {
            return null;
        }
        let maxVal = this.head.value;
        let current = this.head.next;
        while (current) {
            if (current.value > maxVal) {
                maxVal = current.value;
            }
            current = current.next;
        }
        return maxVal;
    }

    min() {
        if (!this.head) {
            return null;
        }
        let minVal = this.head.value;
        let current = this.head.next;
        while (current) {
            if (current.value < minVal) {
                minVal = current.value;
            }
            current = current.next;
        }
        return minVal;
    }

    average() {
        if (!this.head) {
            return null;
        }
        let sum = 0;
        let count = 0;
        let current = this.head;
        while (current) {
            sum += current.value;
            count++;
            current = current.next;
        }
        return sum / count;
    }
}
