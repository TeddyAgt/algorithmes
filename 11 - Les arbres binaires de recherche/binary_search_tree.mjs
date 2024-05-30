class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    if (!this.root) {
      this.root = new Node(key);
    } else {
      let current = this.root;
      while (true) {
        if (current.key > key) {
          if (!current.left) {
            current.left = new Node(key);
            return;
          } else {
            current = current.left;
          }
        } else if (current.key < key) {
          if (!current.right) {
            current.right = new Node(key);
            return;
          } else {
            current = current.right;
          }
        } else {
          // On ne gère pas les clés égales
          return;
        }
      }
    }
  }

  delete(key) {}

  min() {
    if (!this.root) return null;
    let current = this.root;

    while (current.left) {
      current = current.left;
    }
    return current;
  }

  max() {
    if (!this.root) return null;
    let current = this.root;

    while (current.right) {
      current = current.right;
    }
    return current;
  }

  search(key) {
    if (!this.root) return null;
    let current = this.root;

    while (current && current.key !== key) {
      if (key < current.key) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return current;
  }
}

const bst = new BinarySearchTree();

console.log(bst);
bst.insert(14);
console.log(bst);
bst.insert(17);
bst.insert(16);
bst.insert(4);
bst.insert(8);
bst.insert(74);
bst.insert(38);
console.log(bst);
console.log(bst.search(74));
console.log(bst.min());
console.log(bst.max());
