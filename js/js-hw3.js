const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = Object.keys(apartment);
console.log(keys);
const values = Object.values(apartment);
console.log(values);

// Change code below this line

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   // const arrayObject = Object.entries(object);

//   propCount = Object.entries(object).length;
//   // Change code above this line
//   console.log(propCount);
//   return propCount;
// }

// countProps({ name: "Mango", age: 2 });
// countProps({});
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

function countProps(object) {
  // Change code below this line
  let propCount = 0;
  const keys = Object.keys(object);

  for (const key of keys) {
    propCount += 1;
  }
  console.log(propCount);
  return propCount;
  // Change code above this line
}
countProps({ name: "Mango", age: 2 });

//
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  const names = Object.keys(salaries);
  const salary = Object.values(salaries);

  for (const value of salary) {
    totalSalary += value;
  }
  console.log(totalSalary);
  // Change code above this line
  return totalSalary;
}

countTotalSalary({});
countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });

//
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

console.log(hexColors);
console.log(rgbColors);

// Change code below this line

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     if (product.name === productName) {
//       console.log(product.price);
//       return product.price;
//     }

//     // Change code below this line
//   }
//   console.log(null);
//   return null;
//   // Change code above this line
// }

// getProductPrice("Radar");
// getProductPrice("Grip");
// getProductPrice("Scanner");
// getProductPrice("Droid");
// getProductPrice("Engine");

//
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line

  let allValues = [];
  for (const product of products) {
    const key = Object.keys(product);
    if (key.includes(propName)) {
      allValues.push(product[propName]);
      // console.log(allValues);
    }
  }
  console.log(allValues);
  return allValues;
  // Change code above this line
}

getAllPropValues("name");
getAllPropValues("quantity");
getAllPropValues("price");
getAllPropValues("category");

//
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки

//   let totalPrice = 0;

//   for (const product of products) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//     }
//   }
//   console.log(totalPrice);
//   return totalPrice;
//   // Пиши код выше этой строки
// }

// calculateTotalPrice("Blaster");
// calculateTotalPrice("Radar");
// calculateTotalPrice("Droid");
// calculateTotalPrice("Grip");
// calculateTotalPrice("Scanner");

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {
  yesterday,
  today,
  tomorrow,
  icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures;
console.log(highTemperatures);

// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;
// const icon = highTemperatures.icon;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;
console.log(meanTemperature);

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

console.log("bestScore:", bestScore);
console.log("worstScore:", worstScore);

//
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
  return console.log({ ...{ completed, category, priority }, ...data });
  // return { ...{ completed, category, priority }, ...data };

  // Change code above this line
}

makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });
//
// Change code below this line

function add(...args) {
  // Change code above this line
  let totalSum = 0;
  for (let arg of args) {
    totalSum += arg;
  }
  console.log(totalSum);
  return totalSum;
}

add(15, 27);
add(12, 4, 11, 48);
add(32, 6, 13, 19, 8);
add(74, 11, 62, 46, 12, 36);

//
const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line

    let bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);
    // return this.books;
    return console.log(this.books);

    // Change code above this line
  },
};

// console.log(bookShelf.books);
bookShelf.updateBook("The last kingdom", "Dune");

//
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  // Change code above this line
};

// console.log(atTheOldToad.potions);

//
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);
//     return console.log(this.potions);

//     // Change code above this line
//   },
// };

// atTheOldToad.addPotion("Invisibility");
// atTheOldToad.addPotion("Power potion");
