import { Node, LinkedList } from "./linked_list.mjs";

// première méthode
function reverseList(ll) {
  if (!ll.head || !ll.head.next) return;
  let current = ll.head;
  let prev = null;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  ll.head = prev;
}

// seconde méthode
function reverseList2(ll) {
  if (!ll.head || !ll.head.next) return;
  let current = ll.head;
  const reversedList = new LinkedList();
  while (current) {
    reversedList.addItemAtBeginning(current.value);
    current = current.next;
  }
  ll.head = reversedList.head;
}

const ll = new LinkedList();
ll.addItemAtBeginning("a");
ll.addItemAtEnd("b");
ll.addItemAtEnd("c");
ll.print();

reverseList(ll);
ll.print();

reverseList2(ll);
ll.print();
