class HashTable {
  constructor() {
    // Dans l'idéal, on utilise un nombre premier comme taille de la table
    this.table = new Array(97);
    this.size = 0;
    this.MULTIPLICATION = 0.9854648754;
  }

  // version division
  hash(key) {
    let total = 0;

    if (typeof key === "string") {
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }
    } else if (typeof key === "number") {
      total = key;
    }
    return total % this.table.length;
  }

  // version multiplication
  // hash(key) {
  //   let total = 0;

  //   if (typeof key === "string") {
  //     for (let i = 0; i < key.length; i++) {
  //       total += key.charCodeAt(i);
  //     }
  //   } else if (typeof key === "number") {
  //     total = key;
  //   }
  //   return Math.floor(this.table.length * ((total * this.MULTIPLICATION) % 1));
  // }

  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }

  set(key, value = null) {
    const index = this.hash(key);
    if (this.table[index]) {
      console.log("collision");
    } else {
      this.size++;
    }
    this.table[index] = value ?? key;
    return index;
  }

  delete(key) {
    const index = this.hash(key);
    let value = null;

    if (this.table[index]) {
      this.size--;
      value = this.table[index];
      this.table[index] = null;
    }

    return value;
  }

  isEmpty() {
    return this.size === 0;
  }
}

const hash = new HashTable();
console.log(hash);
console.log(hash.isEmpty());
hash.set("name", "cosmo");
console.log(hash);
console.log(hash.get("name"));
console.log(hash.isEmpty());
hash.delete("name");
console.log(hash.isEmpty());
