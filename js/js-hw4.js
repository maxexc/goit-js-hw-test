// Колбэк-функция
function greet(name) {
  console.log(`Добро пожаловать ${name}.`);
}

// Функция высшего порядка
function registerGuest(name, callbk) {
  console.log(`Регистрируем гостя ${name}.`);
  callbk(name);
}

registerGuest("Манго", greet);

//
function processCall(recipient) {
  // Имитируем доступность абонента случайным числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
    // Логика активации автоответчика
  } else {
    console.log(`Соединяем с ${recipient}, ожидайте...`);
    // Логика принятия звонка
  }
}

processCall("Манго");

// // Geolocation
const onGetPositionSuccess = function (position) {
  console.log(position);
};

const onGetPositionError = function (error) {
  console.log(error);
};

window.navigator.geolocation.getCurrentPosition(
  onGetPositionSuccess,
  onGetPositionError
);
//

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Поли", takeCall, leaveHoloMessage);

// const fnA = function (message, callback) {
//   console.log(message);

//   console.log(callback);
//   callback(100);
// };

// const fnB = function () {
//   console.log("Это лог при вызове fnB");
// };

// fnA("qwer", fnB);

const doMath = function (a, b, callback) {
  const result = callback(a, b);

  console.log(result);
};

// const add = function (x, y) {
//   return x + y;
// };
// doMath(2, 3, add);

// const sub = function (x, y) {
//   return x - y;
// };
// doMath(2, 3, sub);

doMath(2, 3, function (x, y) {
  return x + y;
});
doMath(10, 8, function (x, y) {
  return x - y;
});

// отложенный вызов / postporned call
const callback = function () {
  console.log("Через 2 секунды внутри callback в timeout");
};

console.log("В коде перед");

setTimeout(callback, 2000);

console.log("В коде после таймаута");
//
