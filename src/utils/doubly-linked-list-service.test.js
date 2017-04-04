const assert = require('chai').assert

import { Node, DoublyLinkedList } from './doubly-linked-list-service';

describe('Doubly Linked List Service', function() {

  describe('Node', function() {

    it('constructor: should accept a value', function() {
      const node = new Node(1);
      assert.equal(1, node.data);
    });
  });

  describe('DoublyLinkedList', function() {

    it('constructor: should accept head and tail constructor values', function() {
      const doublyLinkedList = new DoublyLinkedList(1, 2);
      assert.equal(1, doublyLinkedList.head);
      assert.equal(2, doublyLinkedList.tail);
    });

    it('constructor: should accept no constructor values', function() {
      const doublyLinkedList = new DoublyLinkedList();
      assert.equal(null, doublyLinkedList.head);
      assert.equal(null, doublyLinkedList.tail);
    });

    const doublyLinkedList = new DoublyLinkedList();
    let firstItem = 'firstItem';
    const firstNode = new Node(firstItem);
    it('addAtFront: should add a single item in a empty list correctly', function() {
      doublyLinkedList.addAtFront(firstItem);
      assert.deepEqual(firstNode, doublyLinkedList.head);
      assert.deepEqual(doublyLinkedList.tail, doublyLinkedList.head);
    });

    let secondItem = 'secondItem';
    const secondNode = new Node(secondItem);

    it('addAtFront: should add a second item in single itemed list correctly', function() {
      doublyLinkedList.addAtFront(secondItem);
      // Node next to the head is equal to the tail
      assert.deepEqual(doublyLinkedList.head.next, doublyLinkedList.tail);
      // Node prev to the tail is equal to the head
      assert.deepEqual(doublyLinkedList.tail.prev, doublyLinkedList.head);
    });
  });
});
