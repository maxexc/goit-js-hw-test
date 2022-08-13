const btnAdd = document.querySelector("button[data-add]");
const resetBtn = document.querySelector("button[data-reset]");
const valueInput = document.querySelector("input[data-value");
const outputEl = document.querySelector(".js-output span");

let total = 0;

btnAdd.addEventListener("click", function () {
  console.log("click heheheh");

  const value = Number(valueInput.value);

  total += value;
  outputEl.textContent = total;
  valueInput.value = "";
});

resetBtn.addEventListener("click", function () {
  total = 0;
  outputEl.textContent = total;
});

// Array / Массивы

// const clients = ["Mango", "Poly", "Ajax"];

// console.log(clients[0]);

// clients[0] = "Kiwi";
// clients[4] = "Pango";
// console.log(clients[0]);

// console.log(clients.length);
// console.log(clients[3]);

// const lastElementIndex = clients.length - 1;
// console.log(lastElementIndex);
// console.log(clients[lastElementIndex]);

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const chush of string) {
//   console.log(chush);
// }

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На каждой итерации будем проверять совпадает ли элемент массива с
//   // именем клиента. Если совпадает то мы записываем в message сообщение
//   // об успехе и делаем break чтобы не искать дальше
//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }

//   // Если они не совпадают то запишем в message сообщение об отсутствии имени
//   message = "Клиента с таким именем нету в базе данных!";
// }

// const name = "Mango";
// console.log(name.split(""));

// const mess = "JavaScript это интересно";
// console.log(mess.split(" "));

// const numbers = [1, 2, 3, 8];

// numbers.unshift(0.5);
// console.log(numbers); // 0.5

// multiply(2, 3, 5); // Результат умножения равен 30
// function multiply(x, y, z) {
//   multiply = x * y * z;
//   return;
// }
// console.log(multiply);

// console.log("Лог после вызова функции multiply");

// function multiply() {
//   let total = 1;

//   for (const dog of arguments) {
//     total *= dog;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3, 4, 5));

function multiply(...arf) {
  return arf;
}
console.log(multiply(3, 5, 8));

function fn() {
  const client = Array.from(arguments);
  return client;
}
console.log(fn(7, 8, 5));

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

// Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// и управление передаётся на следующую итерацию.
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }

  console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
}

// // Выносим варианты в массив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

// // // // // // // // // //

const scores = [1, 2, 3, 4, 5];

// Удаляем три элемента массива, начиная с первого элемента (индекс 0)
const deletedScores = scores.splice(0, 3);

// Теперь массив scores содержит два элемента
console.log(scores); // [4, 5]

// А массив deletedScores содержит три удаленных элемента
console.log(deletedScores); // [1, 2, 3]

const colors = ["red", "green", "blue"];

colors.splice(1, 0, "yellow", "pink");
console.log(colors); // ["red", "yellow", "pink", "green", "blue"]

//
const languages = ["C", "C++", "Java", "JavaScript"];

// Заменяем один элемент (с индексом 2) на несколько
languages.splice(1, 1, "C#", "Swift", "Go");
console.log(languages); // ["C", "C#", "Swift", "Go", Java", "JavaScript"]

//
const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];

const allClientsWithOldFirst = oldClients.concat(newClients);
console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

const allClientsWithNewFirst = newClients.concat(oldClients);
console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
console.log(newClients); // ["Monkong", "Singu"]

// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(); // countFrom = 0, countTo = 10, step = 1

function withdraw(amount, balance) {
  if (amount === 0) {
    console.log("Для проведения операции введите сумму больше нуля");
  } else if (amount > balance) {
    console.log("Недостаточно средств на счету");
  } else {
    console.log("Операция снятия средств проведена успешно");
  }
}

withdraw(0, 300); // "Для проведения операции введите сумму больше нуля"
withdraw(500, 300); // "Недостаточно средств на счету"
withdraw(100, 300); // "Операция снятия средств проведена успешно"

function checkAge(age) {
  let message;
  if (age >= 18) {
    // Change this line
    console.log((message = "You are an adult"));
  }
  if (age < 18) {
    console.log((message = "You are a minor"));
  }
  return;
}

checkAge(20);
checkAge(8);

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line
  let mess;

  if (password === ADMIN_PASSWORD) {
    console.log("Welcome!");
    return "Welcome!";
  }
  console.log("Access denied, wrong password!");
  return "Access denied, wrong password!";

  // Change code above this line
}

checkPassword("mangohackzor");
checkPassword("polyhax");
checkPassword("jqueryismyjam");

const fruits = ["apple", "plum", "pear", "orange"];

// Change code below this line
const firstElement = fruits[0];
console.log(firstElement);
const secondElement = fruits[1];
console.log(secondElement);
const lastElement = fruits[fruits.length - 1];
console.log(lastElement);
