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

//  Репета пример
const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    this.items.push(product);
  },
  remove(productName) {
    for (const item of this.items) {
      console.log(item);
      if (productName === item.name) {
        console.log("нашли такой продукт", productName);
      }
    }
  },
  claer() {},
  countTotalPrice() {},
};

console.table(cart.items);

cart.add({ name: "apple", price: 50 });
cart.add({ name: "grape", price: 60 });
cart.add({ name: "lemon", price: 60 });
cart.add({ name: "strawberry", price: 110 });

console.table(cart.getItems());

//
const students = [
  { name: "Манго", score: 83 },
  { name: "Поли", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Киви", score: 94 },
  { name: "Хьюстон", score: 64 },
];

const names = students.map((student) => student.name);
console.log(names); // ['Манго', 'Поли', 'Аякс', 'Киви', 'Хьюстон']

//
const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line

    let bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);
    return this.books;
    // return console.log(this.books);

    // Change code above this line
  },
};
// console.log(bookShelf.books);
// bookShelf.updateBook("The last kingdom", "Dune");
console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
