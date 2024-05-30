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

  delete(key) {
    this.root = this.deleteNode(this.root, key);
  }

  deleteNode(node, key) {
    if (!node) {
      return null;
    } else if (key > node.key) {
      node.right = this.deleteNode(node.right, key);
      return node;
    } else if (key < node.key) {
      node.left = this.deleteNode(node.left, key);
      return node;
    } else {
      // Premier cas: pas de child
      if (!node.left && !node.right) return null;

      // Second cas: 1 child
      if (!node.right) {
        node = node.left;
        return node;
      } else if (!node.left) {
        node = node.right;
        return node;
      }
      // Troisième cas: 2 children
      const minNode = this.minFromNode(node.right);
      node.key = minNode.key;
      node.right = this.deleteNode(node.right, minNode.key);
      return node;
    }
  }

  min() {
    if (!this.root) return null;
    let current = this.root;

    while (current.left) {
      current = current.left;
    }
    return current;
  }

  minFromNode(node) {
    let current = node;

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
bst.insert(5);
bst.insert(3);
bst.insert(12);
bst.insert(1);
bst.insert(4);
bst.insert(8);
bst.insert(20);
bst.insert(7);
bst.insert(14);
bst.insert(25);
bst.insert(37);
console.log(bst);
console.log(bst.search(3));
console.log(bst.search(1));
bst.delete(1);
console.log(bst.search(1));
console.log(bst.search(3));
console.log(bst);
