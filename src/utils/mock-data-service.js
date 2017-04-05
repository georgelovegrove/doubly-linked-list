import { Node, DoublyLinkedList } from './doubly-linked-list-service';

export function createMockData() {
  const firstNode = new Node({ id: 1, name: 'Bob', score: 7 });
  const secondNode = new Node({ id: 2, name: 'Matt', score: 12 });
  const thirdNode = new Node({ id: 3, name: 'Kate', score: 19 });

  const doublyLinkedList = new DoublyLinkedList();
  doublyLinkedList.addAtFront(firstNode);
  doublyLinkedList.addAtFront(secondNode);
  doublyLinkedList.addAtFront(thirdNode);

  return doublyLinkedList;
}
