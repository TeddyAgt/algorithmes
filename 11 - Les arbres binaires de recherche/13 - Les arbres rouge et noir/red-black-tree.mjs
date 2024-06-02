class RBNode {
  constructor(key, color = "red") {
    this.key = key;
    this.left = null;
    this.right = null;
    this.parent = null;
    // Par défault, les nodes sont rouge
    this.color = color;
  }
}

class RedBlackTree {
  constructor() {
    this.NilNode = new RBNode(null, "black");
    this.root = this.NilNode;
  }

  insert(key) {
    let current = this.root;
    let parent = this.NilNode;
    const newNode = new RBNode(key, "red");

    while (current !== this.NilNode) {
      parent = current;
      if (key < current.key) {
        current = current.left;
      } else if (key > current.key) {
        current = current.right;
      } else {
        // On ne gère pas le cas où on a deux clés identiques
        return;
      }
    }

    newNode.parent = parent;
    if (parent === this.NilNode) {
      newNode.color = "black";
      this.root = newNode;
    } else if (parent.key > newNode.key) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }
    newNode.left = this.NilNode;
    newNode.right = this.NilNode;
    this.insertFix(newNode);
  }

  insertFix(node) {
    let parent = node.parent;

    while (parent.color === red) {
      let grandParent = parent.parent;
      let uncle = this.getUncle(node);
      if (uncle.color === "red") {
        // swap
        uncle.color = "black";
        parent.color = "black";
        if (grandParent !== this.root) {
          grandParent.color = "red";
          node = grandParent;
          parent = node.parent;
        }
      } else {
        // rotations puis swap de couleurs
        let nodeToRecolor = parent;

        // déséquilibre gauche:
        if (parent === grandParent.left) {
          // si déséquilibre gauche gauche
          if (node === parent.left) {
            // On fait une rotation droite
            this.rotateRight(grandParent);
            // Et on swap les couleurs

            // Si déséquilibre gauche droite
          } else {
            // On fait une rotation gauche droite
            this.rotateLeft(parent);
            this.rotateRight(grandParent);
            nodeToRecolor = node;
            // Puis on swap les couleurs
          }
          // déséquilibre droite
        } else {
          // Si déséquilibre droite droite
          if (node === parent.right) {
            // On fait une rotation gauche
            this.rotateLeft(grandParent);
            // Et on swap les couleurs

            // Si déséquilibre droite gauche
          } else {
            // On fait une rotation droite gauche
            this.rotateRight(parent);
            this.rotateLeft(grandParent);
            nodeToRecolor = node;
            // Puis on swap les couleurs
          }
        }
        grandParent.color = "red";
        nodeToRecolor.color = "black";
        return;
      }
    }
  }

  rotateLeft(node) {
    const parent = node.parent;
    nodeRight = node.right;
    node.right = nodeRight.left;
    if (nodeRight.left === this.NilNode) {
      node.right.parent = node;
    }
    if (parent === this.NilNode) {
      this.root = nodeRight;
    } else if (parent.right === node) {
      parent.right = nodeRight;
    } else {
      parent.left = nodeRight;
    }
    nodeRight.parent = parent;
    node.parent = nodeRight;
    nodeRight.left = node;
  }

  rotateRight(node) {
    const parent = node.parent;
    nodeLeft = node.left;
    node.left = nodeLeft.right;
    if (nodeLeft.right === this.NilNode) {
      node.left.parent = node;
    }
    if (parent === this.NilNode) {
      this.root = nodeLeft;
    } else if (parent.left === node) {
      parent.left = nodeLeft;
    } else {
      parent.right = nodeLeft;
    }
    nodeLeft.parent = parent;
    node.parent = nodeLeft;
    nodeLeft.right = node;
  }

  getUncle(node) {
    const parent = node.parent;
    const grandParent = parent.parent;

    if (parent === grandParent.left) {
      return grandParent.right;
    } else {
      return grandParent.left;
    }
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

  print() {
    console.log(JSON.stringify(this.root, null, 2));
  }
}
