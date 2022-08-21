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
