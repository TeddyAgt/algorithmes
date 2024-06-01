import { Queue } from "../../09 - Queues/queue_linkedList.mjs";

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLtree {
  constructor() {
    this.root = null;
  }

  setNodeHeight(node) {
    return (
      Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) +
      1
    );
  }

  getNodeHeight(node) {
    if (node) {
      return node.height;
    } else {
      return 0;
    }
  }

  getBalanceFactor(node) {
    return this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
  }

  // Rotation gauche
  // T1, T2, T3 sont les sous-arbres
  //         x                               y
  //        / \      Rotation gauche (y)    /  \
  //       T1  y    - - - - - - - - ->     x    T3
  //          / \   <- - - - - - - - -    /  \
  //        T2  T3   Rotation droite (x) T1   T2
  rotateLeft(node) {
    const nodeRight = node.right;
    node.right = nodeRight.left;
    nodeRight.left = node;
    node.height = this.setNodeHeight(node);
    nodeRight.height = this.setNodeHeight(nodeRight);

    return nodeRight;
  }

  // Rotation droite
  // T1, T2, T3 sont les sous-arbres
  //         y                               x
  //        / \     Rotation droite (x)     /  \
  //       x   T3   - - - - - - - - ->     T1   y
  //      / \       <- - - - - - - - -         / \
  //     T1  T2     Rotation gauche (y)       T2  T3
  rotateRight(node) {
    const nodeLeft = node.left;
    node.left = nodeLeft.right;
    nodeLeft.right = node;
    node.height = this.setNodeHeight(node);
    nodeLeft.height = this.setNodeHeight(nodeLeft);

    return nodeLeft;
  }

  balanceNode(node, balanceFactor) {
    // Si balanceFactor > 1, on est déséquilibré sur la gauche
    if (balanceFactor > 1) {
      // Si le balanceFactor de l'enfant de gauche est positif, on est en déséquilibre gauche-gauche
      if (this.getBalanceFactor(node.left) >= 0) {
        return this.rotateRight(node);
      }
      // Sinon, on est en déséquilibre gauche-droite
      else {
        node.left = this.rotateLeft(node.left);
        return this.rotateRight(node);
      }
    }
    //  Sinon, on est déséquilibré sur la droite.
    else {
      // Si le balanceFactor de l'enfant de droite est négatif, on est en déséquilibre droite-droite
      if (this.getBalanceFactor(node.right) <= 0) {
        return this.rotateLeft(node);
      }
      // Sinon, on est en déséquilibre droite-gauche
      else {
        node.right = this.rotateRight(node.right);
        return this.rotateLeft(node);
      }
    }
  }

  insert(key) {
    this.root = this.insertNode(this.root, key);
  }

  insertNode(node, key) {
    if (!node) {
      return new Node(key);
    } else if (key > node.key) {
      node.right = this.insertNode(node.right, key);
    } else if (key < node.key) {
      node.left = this.insertNode(node.left, key);
    } else {
      // On ne gère pas les clés identiques
      return node;
    }
    // Comme on a potentiellement modifié node.left ou node.right, on doit procéder à quelques vérifications:
    node.height = this.setNodeHeight(node);
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor > 1 || balanceFactor < -1) {
      return this.balanceNode(node, balanceFactor);
    } else {
      // Si la node est équilibrée, on peut directement la retourner.
      return node;
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
    } else if (key < node.key) {
      node.left = this.deleteNode(node.left, key);
    } else {
      // Premier cas: pas de child
      if (!node.left && !node.right) return null;

      // Second cas: 1 child
      if (!node.right) {
        node = node.left;
      } else if (!node.left) {
        node = node.right;
      }
      // Troisième cas: 2 children
      else {
        const minNode = this.minFromNode(node.right);
        node.key = minNode.key;
        node.right = this.deleteNode(node.right, minNode.key);
      }
    }

    // À partir de là, on a peut-être des déséquilibre, on doit donc procéder à quelques vérifications
    node.height = this.setNodeHeight(node);
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor > 1 || balanceFactor < -1) {
      return this.balanceNode(node, balanceFactor);
    } else {
      // Si la node est équilibrée, on peut directement la retourner.
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

  preOrder() {
    this.preOrderWalk(this.root);
  }

  preOrderWalk(node) {
    if (node) {
      console.log(node.key);
      this.preOrderWalk(node.left);
      this.preOrderWalk(node.right);
    }
  }

  inOrder() {
    this.inOrderWalk(this.root);
  }

  inOrderWalk(node) {
    if (node) {
      this.inOrderWalk(node.left);
      console.log(node.key);
      this.inOrderWalk(node.right);
    }
  }

  postOrder() {
    this.postOrderWalk(this.root);
  }

  postOrderWalk(node) {
    if (node) {
      this.postOrderWalk(node.left);
      this.postOrderWalk(node.right);
      console.log(node.key);
    }
  }

  breadthFirstSearch() {
    const queue = new Queue();
    queue.enqueue(this.root);
    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      if (node) {
        console.log(node.key);
        queue.enqueue(node.left);
        queue.enqueue(node.right);
      }
    }
  }

  print() {
    console.log(JSON.stringify(this.root, null, 2));
  }
}

const tree = new AVLtree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);

tree.print();
