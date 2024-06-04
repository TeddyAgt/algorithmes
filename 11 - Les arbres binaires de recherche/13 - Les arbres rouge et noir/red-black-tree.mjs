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

  getMinFromNode(node) {
    while (node.left !== this.NilNode) {
      node = node.left;
    }
    return node;
  }

  deleteNodeFromParent(node) {
    if (node.parent === this.NilNode) {
      this.root = this.NilNode;
    } else if (node.parent.left === node) {
      node.parent.left = null;
    } else {
      node.parent.right = null;
    }
  }

  delete(key) {
    const node = this.search(key);
    if (!node) {
      return null;
    } else {
      let nodeToDelete = node;

      while (
        nodeToDelete.left !== this.NilNode ||
        nodeToDelete.right !== this.NilNode
      ) {
        // À ce stade, on a soit un enfin à gauche, soit un enfant à droite, soit deux enfants
        // Si on a un enfant à droite:
        if (nodeToDelete.left === this.NilNode) {
          nodeToDelete.key = nodeToDelete.right.key;
          nodeToDelete = nodeToDelete.right;
          // Si on a un enfant à gauche:
        } else if (nodeToDelete.right === this.NilNode) {
          nodeToDelete.key = nodeToDelete.left.key;
          nodeToDelete = nodeToDelete.left;

          // Si on a deux enfants:
        } else {
          let minNodeFromRight = this.getMinFromNode(nodeToDelete.right);
          nodeToDelete.key = minNodeFromRight.key;
          nodeToDelete = minNodeFromRight();
        }
      }

      if (nodeToDelete.color === "black") {
        this.deleteFix(nodeToDelete);
      }
      this.deleteNodeFromParent(nodeToDelete);
    }
  }

  getSibling(node) {
    if (node.parent.left === node) {
      return node.parent.right;
    }
    {
      return node.parent.left;
    }
  }

  getFarSiblingSon(node) {
    if (node.parent.left === node) {
      return node.parent.right.right;
    } else {
      return node.parent.left.left;
    }
  }

  getCloseSiblingSon(node) {
    if (node.parent.left === node) {
      return node.parent.right.left;
    } else {
      return node.parent.left.right;
    }
  }

  deleteFix(nodeToDelete) {
    if (nodeToDelete === this.root) {
      // cas A
      return;
    } else {
      let sibling = this.getSibling(nodeToDelete);
      let parent = nodeToDelete.parent;
      if (
        sibling.color === "black" &&
        sibling.left.color === "black" &&
        sibling.right.color === "black"
      ) {
        // cas B
        sibling.color = "red";
        if (parent.color === "red") {
          parent.color = "black";
        } else {
          this.deleteFix(parent);
        }
      } else if (sibling.color === "red") {
        // cas C
        parent.color = "red";
        sibling.color = "black";
        if (parent.left === nodeToDelete) {
          this.rotateLeft(parent);
        } else {
          this.rotateRight(parent);
        }
        this.deleteFix(nodeToDelete);
      } else {
        let farSiblingSon = this.getFarSiblingSon(nodeToDelete);
        if (farSiblingSon.color === "black") {
          // cas D
          const closeSiblingSon = this.getCloseSiblingSon(nodeToDelete);
          closeSiblingSon.color = "black";
          sibling.color = "red";
          if (nodeToDelete === parent.left) {
            this.rotateRight(sibling);
          } else {
            this.rotateLeft(sibling);
          }
        }
        // cas E
        sibling = this.getSibling(nodeToDelete);
        farSiblingSon = this.getFarSiblingSon(nodeToDelete);
        sibling.color = parent.color;
        farSiblingSon.color = "black";
        parent.color = "black";
        if (nodeToDelete === parent.left) {
          this.rotateLeft(parent);
        } else {
          this.rotateRight(parent);
        }
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
    let current = this.root;

    while (current !== this.NilNode) {
      if (key < current.key) {
        current = current.left;
      } else if (key > current.key) {
        current = current.right;
      } else {
        return current;
      }
    }
    return null;
  }

  print() {
    console.log(JSON.stringify(this.root, null, 2));
  }
}
