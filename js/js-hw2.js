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

const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
let message;

for (const client of clients) {
  // На каждой итерации будем проверять совпадает ли элемент массива с
  // именем клиента. Если совпадает то мы записываем в message сообщение
  // об успехе и делаем break чтобы не искать дальше
  if (client === clientNameToFind) {
    message = "Клиент с таким именем есть в базе данных!";
    break;
  }

  // Если они не совпадают то запишем в message сообщение об отсутствии имени
  message = "Клиента с таким именем нету в базе данных!";
}
