import { Node, LinkedList } from "./linked_list.mjs";

function insertionSort(ll) {
  if (!ll.head || !ll.head.next) return;
  let current = ll.head;
  const sortedList = new LinkedList();
  sortedList.addItemAtBeginning(current.value);
  current = current.next;
  while (current) {
    let sortedHead = sortedList.head;
    while (sortedHead.next && sortedHead.next.value < current.value) {
      sortedHead = sortedHead.next;
    }
    if (sortedHead.value > current.value) {
      sortedList.head = new Node(current.value, sortedHead);
    } else {
      sortedHead.next = new Node(current.value, sortedHead.next);
    }
    current = current.next;
  }
  ll.head = sortedList.head;
}

const ll = new LinkedList();
ll.addItemAtBeginning(5);
ll.addItemAtEnd(22);
ll.addItemAtEnd(12);
ll.addItemAtEnd(37);
ll.print();

insertionSort(ll);
ll.print();
