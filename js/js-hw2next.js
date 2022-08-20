function calculateTotal(number) {
  // Change code below this line
  let sum = 0;
  for (let i = 0; i <= number; i += 1) {
    sum += i;
  }
  console.log(sum);
  return sum;
  // Change code above this line
}
calculateTotal(1);
calculateTotal(3);
calculateTotal(7);
calculateTotal(18);
calculateTotal(24);

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }

  console.log(numbers);

  // Change code above this line
  return numbers;
}

createArrayOfNumbers(1, 3);
createArrayOfNumbers(14, 17);
createArrayOfNumbers(29, 34);

function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  const message = fruits.includes(fruit);
  console.log(message);

  return fruits.includes(fruit); // Change this line
}

checkFruit("plum");
checkFruit("mandarin");
checkFruit("pear");
checkFruit("Pear");
checkFruit("apple");

function getCommonElements(array1, array2) {
  // Change code below this line
  let newArray = [];

  for (let element of array1) {
    if (array2.includes(element)) {
      newArray.push(element);
    }
  }
  console.log(newArray);
  return newArray;

  // Change code above this line
}

getCommonElements([1, 2, 3], [2, 1, 17, 19]);

function getEvenNumbers(start, end) {
  // Change code below this line
  const newArray = [];

  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      newArray.push(i);
    }
  }
  console.log(newArray);
  return newArray;

  // Change code above this line
}

getEvenNumbers(2, 5);
getEvenNumbers(3, 11);
getEvenNumbers(6, 12);
getEvenNumbers(8, 8);
getEvenNumbers(7, 7);

//
const books = "fish";

const bookShelf = {
  [books]: ["The Last Kingdom"],
  getBooks() {
    return this.fish;
  },
  addBook(bookName) {
    this.fish.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.fish.indexOf(bookName);
    this.fish.splice(bookIndex, 1);
  },
};

console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
bookShelf.addBook("The Mist");
bookShelf.addBook("Dream Guardian");
console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
bookShelf.removeBook("The Mist");
console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

const keys = Object.keys(bookShelf);
console.log(keys);

for (const key of keys) {
  // Ключ
  console.log(key);
  // Значение свойства
  console.log(bookShelf[key]);
}

const entries = Object.entries(bookShelf);
console.log(entries);

//
// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//   },
// };
// bookShelf.getBooks();

//
const animal = {
  legs: 4,
  tails: 2,
};
const dog = Object.create(animal);
dog.name = "Манго";

console.log(dog); // {name: 'Манго'}
console.log(dog.name); // 'Манго'
console.log(dog.legs); // 4
console.log(dog.tails);

console.log(dog.hasOwnProperty("name")); // true
console.log(dog.hasOwnProperty("tails")); // false

//
const temps = [14, -4, 25, 8, 11];
console.log(Math.max(...temps)); // 25
