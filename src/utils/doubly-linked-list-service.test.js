import { assert } from 'chai';

import { Node, DoublyLinkedList } from './doubly-linked-list-service';

describe('Doubly Linked List Service', function() {

  describe('Node', function() {

    it('constructor: should accept a value', function() {
      const node = new Node(1);
      assert.equal(1, node.data);
    });
  });

  describe('DoublyLinkedList', function() {

    // constructor
    it('constructor: should accept head and tail constructor values', function() {
      const firstNode = new Node(1);
      const secondNode = new Node(2);
      const doublyLinkedList = new DoublyLinkedList(firstNode, secondNode);
      assert.equal(1, doublyLinkedList.head.data);
      assert.equal(2, doublyLinkedList.tail.data);
    });

    it('constructor: should accept no constructor values', function() {
      const doublyLinkedList = new DoublyLinkedList();
      assert.equal(null, doublyLinkedList.head);
      assert.equal(null, doublyLinkedList.tail);
    });

    const doublyLinkedList = new DoublyLinkedList();

    // addAtFront
    it('addAtFront: should add a single item in a empty list correctly', function() {
      const firstItem = 'firstItem';
      const firstNode = new Node(firstItem);
      doublyLinkedList.addAtFront(firstItem);
      assert.deepEqual(firstNode, doublyLinkedList.head);
      assert.deepEqual(doublyLinkedList.tail, doublyLinkedList.head);
    });

    it('addAtFront: should add a second item in single itemed list correctly', function() {
      const secondItem = 'secondItem';
      const secondNode = new Node(secondItem);
      doublyLinkedList.addAtFront(secondItem);
      assert.deepEqual(doublyLinkedList.head.next, doublyLinkedList.tail);
      assert.deepEqual(doublyLinkedList.tail.prev, doublyLinkedList.head);
    });

    // removeAtHead
    it('removeAtHead: should remove the first item in two itemed list correctly', function() {
      doublyLinkedList.removeAtHead();
      assert.equal('firstItem', doublyLinkedList.head.data);
      assert.equal('firstItem', doublyLinkedList.tail.data);
    });

    it('removeAtHead: should remove an item from a single itemed list correctly', function() {
      doublyLinkedList.removeAtHead();
      assert.equal(null, doublyLinkedList.head);
      assert.equal(null, doublyLinkedList.tail);
    });

    // forEach
    it('forEach: should iterate over a list from the head to tail correctly', function() {
      const thirdItem = 'thirdItem';
      const fourthItem = 'fourthItem';
      const fifthItem = 'fifthItem';
      doublyLinkedList.addAtFront(thirdItem);
      doublyLinkedList.addAtFront(fourthItem);
      doublyLinkedList.addAtFront(fifthItem);

      const nodeList = [];
      const addToNodeList = (node) => nodeList.push(node);
      doublyLinkedList.forEach(addToNodeList);

      assert.equal(nodeList[0].data, fifthItem);
      assert.equal(nodeList[1].data, fourthItem);
      assert.equal(nodeList[2].data, thirdItem);
    });

    // TODO addAtEnd

    // TODO removeAtTail
  });
});
