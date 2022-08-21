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
