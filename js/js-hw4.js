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
// const onGetPositionSuccess = function (position) {
//   console.log(position);
// };

// const onGetPositionError = function (error) {
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//   onGetPositionSuccess,
//   onGetPositionError
// );
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
// const callback = function () {
//   console.log("Через 2 секунды внутри callback в timeout");
// };

// console.log("В коде перед");

// setTimeout(callback, 2000);

// console.log("В коде после таймаута");
//

// backEnd example
// const onRequestSuccess = function (responce) {
//   console.log("Вызов функции onRequestSuccess после успешного ответа бекенда");
//   console.log(responce);
// };

// fetch("https://pokeapi.co/api/v2/pokemon")
//   .then((res) => res.json())
//   .then(onRequestSuccess);
//

// Функция Фильтрации
//
const filter = function (array, test) {
  const filteredArray = [];

  for (const el of array) {
    // console.log(el);
    const passed = test(el);

    if (passed) {
      filteredArray.push(el);
    }
  }

  return filteredArray;
};

const callback = function (value) {
  return value >= 3;
};

const r1 = filter([1, 2, 3, 4, 5], callback);
console.log(r1);

const callback2 = function (value) {
  return value <= 4;
};

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
console.log(r2);

const fruits = [
  { name: "apples", quantity: 200, isFresh: true },
  { name: "grapes", quantity: 150, isFresh: false },
  { name: "bananas", quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = function (fruit) {
  return fruit.quantity >= 120;
};

const r3 = filter(fruits, getFruitsWithQuantity);
console.table(r3);

// hw4_4
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, makePizza, onOrderError) {
//     for (const pizza of this.pizzas) {
//       if (pizza === pizzaName) {
//         return console.log(makePizza(pizzaName));
//       } else return console.log(onOrderError(pizzaName));
//     }
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(pizzaName) {
//   return `There is no pizza with a name ${pizzaName} in the assortment.`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);
// // //

const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    for (const pizza of this.pizzas) {
      if (pizza === pizzaName) {
        console.log(onSuccess(pizzaName));
        return onSuccess(pizzaName);
      }
    }

    console.log(onError(pizzaName));
    return onError(pizzaName);
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(pizzaName) {
  return `Error! There is no pizza with a name ${pizzaName} in the assortment.`;
}

// Method calls with callbacks
pizzaPalace.order("Smoked", makePizza, onOrderError);
pizzaPalace.order("Four meats", makePizza, onOrderError);
pizzaPalace.order("Big Mike", makePizza, onOrderError);
pizzaPalace.order("Vienna", makePizza, onOrderError);

// //
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

  orderedItems.forEach(function (item) {
    totalPrice += item;
  });

  // for (let i = 0; i < orderedItems.length; i += 1) {
  //   totalPrice += orderedItems[i];
  // }

  // Change code above this line
  return console.log(totalPrice);
}

calculateTotalPrice([12, 85, 37, 4]);
calculateTotalPrice([164, 48, 291]);
calculateTotalPrice([412, 371, 94, 63, 176]);

//
function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line

  numbers.forEach(function (item) {
    if (item > value) {
      filteredNumbers.push(item);
    }
  });

  // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] > value) {
  //     filteredNumbers.push(numbers[i]);
  //   }
  // }

  // Change code above this line
  console.log(filteredNumbers);
  return filteredNumbers;
}

filterArray([1, 2, 3, 4, 5], 3);
filterArray([1, 2, 3, 4, 5], 4);
filterArray([1, 2, 3, 4, 5], 5);
filterArray([12, 24, 8, 41, 76], 38);
filterArray([12, 24, 8, 41, 76], 20);

//
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line
  firstArray.forEach(function (firstElement) {
    if (secondArray.includes(firstElement)) {
      commonElements.push(firstElement);
    }
  });

  // for (let i = 0; i < firstArray.length; i += 1) {
  //   if (secondArray.includes(firstArray[i])) {
  //     commonElements.push(firstArray[i]);
  //   }
  // }

  console.log(commonElements);
  return commonElements;
  // Change code above this line
}

getCommonElements([1, 2, 3], [2, 4]);
getCommonElements([1, 2, 3], [2, 1, 17, 19]);
getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
getCommonElements([1, 2, 3], [10, 20, 30]);

// even function / четная функция
function changeEven(numbers, value) {
  const newArray = [];

  numbers.forEach((element) => {
    if (element % 2 === 0) {
      newArray.push(element + value);
    } else if (!element % 2 === 0) {
      newArray.push(element);
    }
  });

  console.log("четная функция", newArray);
  return newArray;
  // Change code above this line
}

changeEven([2, 8, 3, 7, 4, 6], 10);

// // // //
const studentss = [
  { name: "Манго", courses: ["математика", "физика"] },
  { name: "Поли", courses: ["информатика", "математика"] },
  { name: "Киви", courses: ["физика", "биология"] },
];

const allCourses = studentss.flatMap((student) => student.courses);
// ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];
console.log(allCourses);
const uniqueCourses = allCourses.filter(
  (course, index, array) => array.indexOf(course) === index
);
console.log(uniqueCourses);

//
const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: "Манго", score: 83 },
  { name: "Поли", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Киви", score: 94 },
  { name: "Хьюстон", score: 64 },
];

const best = students.filter((student) => student.score >= HIGH_SCORE);
console.log("best students");
console.table(best); // Массив объектов с именами Манго и Киви

const worst = students.filter((student) => student.score < LOW_SCORE);
console.log("worst students");
console.table(worst); // Массив с одним объектом Аякс

// В коллбек-функции удобно деструктуризировать свойства объекта
const average = students.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log("average students");
console.table(average); // Массив объектов с именами Поли и Хьюстон
//

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

colorPickerOptions.find((option) => option.label === "blue"); // { label: 'blue', color: '#2196F3' }
colorPickerOptions.find((option) => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
colorPickerOptions.findIndex((option) => option.label === "pink"); // 3
colorPickerOptions.find((option) => option.label === "white"); // undefined
console.log(colorPickerOptions.find((option) => option.label === "blue"));
console.log(colorPickerOptions.findIndex((option) => option.label === "pink"));

console.log("Метод value");
// Все элементы больше либо равны нулю? - да
[1, 2, 3, 4, 5].every((value) => value >= 0); // true
console.log([1, 2, 3, 4, 5].every((value) => value >= 0));
// Все элементы больше либо равны нулю? - нет
[1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false
console.log([1, 2, 3, -10, 4, 5].every((value) => value >= 0));

console.log("Метод some");
// Есть хотя бы один элемент больше либо равный нулю? - да
[1, 2, 3, 4, 5].some((value) => value >= 0); // true
console.log([1, 2, 3, 4, 5].some((value) => value >= 0));
// Есть хотя бы один элемент больше либо равный нулю? - да
[-7, -20, 3, -10, -14].some((value) => value >= 0); // true
console.log([-7, -20, 3, -10, -14].some((value) => value >= 0));
// Есть хотя бы один элемент меньше нуля? - нет
[1, 2, 3, 4, 5].some((value) => value < 0); // false
// Есть хотя бы один элемент меньше нуля? - да
[1, 2, 3, -10, 4, 5].some((value) => value < 0); // true

//
const fruitss = [
  { name: "apples", amount: 100 },
  { name: "bananas", amount: 0 },
  { name: "grapes", amount: 50 },
];

// every вернет true только если всех фруктов будет больше чем 0 штук
const allAvailable = fruitss.every((fruit) => fruit.amount > 0); // false
console.log("Массив объектов", allAvailable);
// some вернет true если хотябы одного фрукта будет больше чем 0 штук
const anyAvailable = fruitss.some((fruitss) => fruitss.amount > 0); // true
console.log("Массив объектов", anyAvailable);

//
const sstudents = [
  { name: "Манго", score: 83 },
  { name: "Поли", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Киви", score: 94 },
  { name: "Хьюстон", score: 64 },
];

// Название аккумулятора может быть произвольным, это просто параметр функции

const totalNames = sstudents.reduce((allNames, student) => {
  allNames.push(student.name);
  return allNames;
}, []);

console.log(totalNames);
// const averageScore = totalScore / sstudents.length;

//
// Продвинутый reduce
console.log("Продвинутый reduce");
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
// Пройдем по всем элементам коллекции и прибавим значения свойства likes
// к аккумулятору, начальное значение которого укажем 0.
const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

console.log(likes); // 32

// Наверное подсчет лайков не одиночная операция, поэтому напишем функцию
// для подсчета лайков из коллекции
const countLikes = (tweets) => {
  return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
};

console.log(countLikes(tweets)); // 32

// Пройдем по всем элементам коллекции и добавим значения свойства tags
// к аккумулятору, начальное значение которого укажем пустым массивом [].
// На каждой итерации пушим в аккумулятор все элементы tweet.tags и возвращаем его.
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

// Наверное сбор тегов не одиночная операция, поэтому напишем функцию
// для сбора тегов из коллекции
// const getTags = (tweets) =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags(tweets));

const getTags = tweets.reduce((allTags, tweet) => {
  allTags.push(...tweet.tags);

  return allTags;
}, []);

console.log(getTags);

// Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// Это стандартная практика если callback-функция довольно большая.

// Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// то создаем его и записывает ему значение 0.
// В противном случае увеличиваем значение на 1.
const tags = getTags;

const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }

  acc[tag] += 1;

  return acc;
};

// Начальное значение аккумулятора это пустой объект {}
const countTags = (tags) => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount);

// Метод sort()
console.log("Метод sort()");

const scores = [61, 19, 74, 35, 92, 56];
scores.sort();
console.log(scores); // [19, 35, 56, 61, 74, 92]

const scores2 = [27, 2, 41, 4, 7, 3, 75];
scores.sort();
console.log(scores2); // [2, 27, 3, 4, 41, 7, 75]

//
const scores3 = [27, 2, 41, 4, 7, 3, 75];
const ascendingScores = [...scores3].sort((a, b) => a - b);
console.log(scores3);
console.log("Возростание", ascendingScores); // 2, 27, 3, 4, 41, 7, 75]

const scores4 = [61, 19, 74, 35, 92, 56];
const descendingScores = [...scores4].sort((a, b) => b - a);
console.log("Убывание", descendingScores); // [92, 74, 61, 56, 35, 19]
//

//
const students2 = ["Вика", "Андрей", "Олег", "Юля", "Борис", "Катя"];

const inAlphabetOrder = [...students2].sort((a, b) => a.localeCompare(b));
console.log("inAlphabet", inAlphabetOrder); // ['Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля']

const inReversedOrder = [...students2].sort((a, b) => b.localeCompare(a));
console.log("Reverse", inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Вика', 'Борис', 'Андрей']
//

//
const students3 = [
  { name: "Манго", score: 83, courses: ["математика", "физика"] },
  { name: "Поли", score: 59, courses: ["информатика", "математика"] },
  { name: "Аякс", score: 37, courses: ["физика", "биология"] },
  { name: "Киви", score: 94, courses: ["литература", "информатика"] },
];
console.table(students3);

const sortedByAscendingScore = [...students3].sort((a, b) => a.score - b.score);
console.log(sortedByAscendingScore);
const names = sortedByAscendingScore.map((student) => student.name);

console.log(names); // ['Аякс', 'Поли', 'Манго', 'Киви']

// const names = [...students3]
//   .sort((a, b) => a.score - b.score)
//   .map((student) => student.name);
яИМ;
// console.log(names); // ['Аякс', 'Поли', 'Манго', 'Киви']

const uniqueSortedCourses = students3
  .flatMap((student) => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); // ['биология', 'информатика', 'литература', 'математика', 'физика']
