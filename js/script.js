"use strict"; // Строгий режим

console.log("JavaScript is awesome".toUpperCase());
const yearOfBirth = 2006;
console.log(yearOfBirth); // 2006

let username;
console.log(typeof username);

// const message = "JavaScript is awesome!";
// alert(message);

// Просим клиента подтвердить бронь на отель
// и сохраняем в переменную результат работы confirm
// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

// const value = prompt("Please enter a number!");
// console.log(typeof value); // "string"
// console.log(value); // "5"

// Аналогично записи value = value + 10;
let value = 5;
value += 10;
console.log(value); // 15

console.log(1 * 3 + "2" * 4); // "..."

const guestName = "Манго";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting); // "Welcome Mango, your room number is 207!"

const message = "Welcome to Bahamas!";
console.log(message.toLowerCase()); // "welcome to bahamas!"
console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
console.log(message); // "Welcome to Bahamas!"

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
  const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
  // Change code above this line
  return message;
}
let result = makeOrderMessage(2, 100, 50);
console.log(result); // 30

/////
let cost = 0;
const subscription = "pro";

if (subscription === "pro") {
  cost = 100;
}

console.log(cost); // 100
/////
let costB = 0;
const subscriptionB = "free";

if (subscriptionB === "pro") {
  costB = 100;
}

console.log(costB); // 0
/////
let costC = 53;
const subscriptionC = "free";

if (subscriptionC === "pro") {
  costC = 100;
} else {
  costC = 10;
}

console.log(costC); // 0
/////
let costD;
const subscriptionD = "premium";

if (subscriptionD === "free") {
  costD = 0;
} else if (subscriptionD === "pro") {
  costD = 100;
} else if (subscriptionD === "premium") {
  costD = 500;
} else {
  console.log("Invalid subscription type");
}

console.log(costD); // 500

// Тернарный оператор вместо if...else

// let type;
// const age = 20;
// if (age >= 18) {
//   type = "adult";
// } else {
//   type = "child";
// }
// console.log(type); // "adult"

const age = 20;
const type = age >= 18 ? "adult" : "child";
console.log(type); // "adult"

// let quantity = prompt("Введите количество товаров");
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

let costE;
const subscriptionE = "premium";

switch (subscriptionE) {
  case "free":
    costE = 0;
    break;

  case "pro":
    costE = 100;
    break;

  case "premium":
    costE = 500;
    break;

  default:
    console.log("Invalid subscription type");
}

console.log(costE); // 500

///Возведение в сетпень

// let base = prompt("Давай число");
// base = Number(base);

// console.log(base);
// //
// let power = prompt("Давай степень");
// power = Number(power);

// console.log(power);
// //
// const resultA = base ** power;
// console.log(resultA);

// Генератор случайных чисел / randomizer
const max = 80;
const min = 10;

const resultB = Math.round(Math.random() * (max - min) + min);
console.log(resultB);

// смена цветов / change backgroundcolor
const colors = ["lightgreen", "teal", "orange", "deeppink", "skyblue"];
const maxC = colors.length - 1;
const minC = 0;

const index = Math.round(Math.random() * (maxC - minC) + minC);

const color = colors[index];

console.log(color);

document.body.style.backgroundColor = color;
// смена цветов / change backgroundcolor
