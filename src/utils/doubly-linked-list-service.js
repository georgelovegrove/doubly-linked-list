export class Node {
  constructor(value) {
    this.data = value;
    this.prev = null;
    this.next = null;
  }
}

export class DoublyLinkedList {
  constructor(head, tail) {
    this.head = head ? head : null;
    this.tail = tail ? tail : null;
  };

  addAtFront(value) {
    if (!this.head) {  // If first node
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      let temp = new Node(value);
      temp.next = this.head;
      this.head.prev = temp;
      this.head = temp;
    }
  };

  addAtEnd(value) {
    if (!this.tail) {  // If first node
      this.tail = new Node(value);
      this.head = this.tail;
    } else {
      let temp = new Node(value);
      temp.prev = this.tail;
      this.tail.next = temp;
      this.tail = temp;
    }
  };

  removeAtHead() {
    let toReturn = null;

    if (this.head) {
      toReturn = this.head.data;

      if (this.tail === this.head) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
    }
    return toReturn;
  };

  removeAtTail() {
    let toReturn = null;

    if (this.tail) {
      toReturn = this.tail.data;

      if (this.tail === this.head) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
    }

    return toReturn;
  };

  forEach(callback) {
    let current = this.head;
    while (current) {
      callback(current);
      current = current.next;
    }
  };
}
