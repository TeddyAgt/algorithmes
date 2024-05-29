import { Queue } from "./queue_linkedList.mjs";

const q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q);

function reverseQueue(queue) {
  if (queue.isEmpty()) return;

  const tmp = queue.dequeue();
  reverseQueue(queue);
  queue.enqueue(tmp);

  return queue;
}

console.log(reverseQueue(q));

console.log(q);
