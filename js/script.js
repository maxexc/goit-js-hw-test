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

let cost = 0;
const subscription = "pro";

if (subscription === "pro") {
  cost = 100;
}

console.log(cost); // 100
