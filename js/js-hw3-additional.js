// function multiply(...args) {
//   //   console.log(args);
//   const result = [];
//   for (const arg of args) {
//     result.push(...args);
//   }
//   return console.log(result); // массив всех аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

//
function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber); // Значение первого аргумента
  console.log(secondNumber); // Значение второго аргумента
  console.log(otherArgs); // Массив остальных аргументов
}

// multiply(1, 2);
// multiply(1, 2, 3);
multiply(1, 2, 3, 4);

const temps = [18, 14, 12, 27, 29, 24];

console.log(Math.max(1, 4, 27, 5, 9));
console.log(Math.min(temps));
console.log(Math.min(...temps));

//  Репета пример / Example from Repeta
const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    console.table(this.items);
    for (const item of this.items) {
      if (item.name === product.name) {
        console.log("Такой продукт уже есть", product.name);
        item.quantity += 1;
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };

    this.items.push(newProduct);
  },
  // add(product) {
  //   this.items.push(product);
  // },
  remove(productName) {
    const { items } = this;
    for (let i = 0; i < items.length; i += 1) {
      const { name } = this.items[i];
      if (productName === name) {
        console.log("нашли такой продукт", productName);
        console.log("индекс", i);

        items.splice(i, 1);
      }
    }
    // // не модно)))
    // remove(productName) {
    //   for (let i = 0; i < this.items.length; i += 1) {
    //     const item = this.items[i];
    //     if (productName === item.name) {
    //       console.log("нашли такой продукт", productName);
    //       console.log("индекс", i);

    //       this.items.splice(i, 1);
    //     }
    //    }
    // // не модно)))
    // for (let i = 0; i < this.items.length; i += 1) {
    //  console.log(this.items[i]);
    //  const item = this.items[i];
    //   if (productName === item.name) {
    //     console.log("нашли такой продукт", productName);
    //   }
    // }
    // {
    //   console.log(this.items[i]);
    //   if (productName === this.items[i].name) {
    //     console.log("нашли такой продукт", productName);
    //   }
    // }
    // for (const item of this.items) {
    //   console.log(item);
    //   if (productName === item.name) {
    //     console.log("нашли такой продукт", productName);
    //   }
    // }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;
    let total = 0;

    for (const { price, quantity } of items) {
      total += price * quantity;
    }
    return total;
  },
  // countTotalPrice() {
  //   // console.log(this.items);

  //   let total = 0;
  //   for (const item of this.items) {
  //     console.log(item);
  //     total += item.price;
  //   }
  //   return total;
  // },
  increaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        console.log("добавили такой продукт", productName);
        item.quantity += 1;
      }
      // else items.slice(items.indexOf("item.name"), 1);
    }
  },
};

console.log(cart.getItems());

// cart.add({ name: "apple"🍎, price: 50 });
// cart.add({ name: "grape"🍇, price: 60 });
// cart.add({ name: "lemon"🍋, price: 60 });
// cart.add({ name: "strawberry"🍓, price: 110 });

cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍇", price: 60 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍓", price: 110 });
cart.add({ name: "🍓", price: 110 });
cart.add({ name: "🍓", price: 110 });

console.table(cart.getItems());

console.log("Total:", cart.countTotalPrice(), "credits");

cart.remove("🍇");

cart.increaseQuantity("🍎");
console.table(cart.getItems());

console.log("Total:", cart.countTotalPrice(), "credits");

cart.clear();
console.log(cart.getItems());

// cart.increaseQuantity("🍎");
// console.log(cert.getItems());

//
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// const names = students.map((student) => student.name);
// console.log(names); // ['Манго', 'Поли', 'Аякс', 'Киви', 'Хьюстон']

//
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line

//     let bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//     return this.books;
//     // return console.log(this.books);

//     // Change code above this line
//   },
// };
// // console.log(bookShelf.books);
// // bookShelf.updateBook("The last kingdom", "Dune");
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
