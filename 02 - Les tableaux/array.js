class MyArray {
  constructor() {
    this.value = new Array(0);
  }

  addItemAtBeginning(item) {
    const arr = new Array(this.value.length + 1);
    arr[0] = item;
    for (let i = 0; i < this.value.length; i++) {
      arr[i + 1] = this.value[i];
    }
    this.value = arr;
  }

  addItemAtEnd(item) {
    const arr = new Array(this.value.length + 1);
    // for (let i = 0; i < this.value.length; i++) {
    //   arr[i] = this.value[i];
    // }
    // arr[this.value.length] = item;

    // Seconde possibilité avec une boucle while
    let i = 0;
    while (i < this.value.length) {
      arr[i] = this.value[i];
      i++;
    }
    arr[i] = item;

    // Puis assignation au tableau original
    this.value = arr;
  }

  addItemAtPosition(item, position) {
    const arr = new Array(this.value.length + 1);
    if (position < 0 || position > this.value.length) {
      throw new Error("Wrong Input");
    }

    // let i = 0;
    // let j = 0;
    // while (i < this.value.length) {
    //   if (i === position) {
    //     arr[j] = item;
    //     j++;
    //   }
    //   arr[j] = this.value[i];
    //   i++;
    //   j++;
    // }

    // Seconde methode avec une boucle for
    for (let i = 0; i < this.value.length + 1; i++) {
      if (i === position) {
        arr[i] = item;
      } else if (i < position) {
        arr[i] = this.value[i];
      } else {
        arr[i] = this.value[i - 1];
      }
    }

    this.value = arr;
  }

  removeItemAtBegenning() {
    if (!this.value.length) return;

    const arr = new Array(this.value.length - 1);

    for (let i = 1; i < this.value.length; i++) {
      arr[i - 1] = this.value[i];
    }
    this.value = arr;
  }

  removeItemAtEnd() {
    if (!this.value.length) return;

    const arr = new Array(this.value.length - 1);

    for (let i = 0; i < this.value.length - 1; i++) {
      arr[i] = this.value[i];
    }
    this.value = arr;
  }

  removeItemAtPosition(position) {
    if (!this.value[position]) return;

    const arr = new Array(this.value.length - 1);

    for (let i = 0; i < this.value.length; i++) {
      if (i === position) {
        continue;
      } else if (i < position) {
        arr[i] = this.value[i];
      } else {
        arr[i - 1] = this.value[i];
      }
    }
    this.value = arr;
  }
}

const myarr = new MyArray();
myarr.addItemAtBeginning("miel");
myarr.addItemAtEnd("soupe");
myarr.addItemAtPosition("tisane", 1);
// myarr.removeItemAtBegenning();
// myarr.removeItemAtEnd();
myarr.removeItemAtPosition(1);
console.log(myarr);
