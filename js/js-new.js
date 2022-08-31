// examples Repeta

const numbers2 = [5, 10, 15, 20, 25];

const doubledNums = numbers2.map((number) => {
  console.log(number);

  return number * 2;
});

console.log("numbers2:", numbers2);
console.log("doubledNums:", doubledNums);

//
const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

const playerNames = players.map((player) => player.name);
console.log("playerNames", playerNames);

const playerIds = players.map((player) => player.id);
console.log("playerIds", playerIds);

// const res = players.map(({ name, online }) => ({
//   name,
//   online,
// }));

// const res = players.map((player) => {
//   return {
//     name: player.name,
//     online: player.online,
//   };
// });
// console.log("res", res);

const updatedPlayers = players.map((player) => {
  console.log(player);

  return {
    ...player,
    points: player.points * 1.1,
  };
});

console.table(updatedPlayers);
console.log(updatedPlayers);

//
const onlinePlayers = players.filter((player) => player.online);
// console.table(onlinePlayers);

const offlinePlayers = players.filter((player) => !player.online);
// console.table(offlinePlayers);

const hardcorePlayers = players.filter((player) => player.timePlayed > 250);
// console.table(hardcorePlayers);

const findPlayerById = (allPlayer, playerId) =>
  allPlayer.find(({ id }) => id === playerId);
// console.log(findPlayerById(players, "player-1"));
// console.log(findPlayerById(players, "player-3"));

// const isAllOnline = players.every((player) => player.online);
// console.table("isAllOnline:", isAllOnline);

const isAnyOnline = players.some((player) => player.online);
console.table("isAnyOnline:", isAnyOnline);

const anyHardcorePlayers = players.some((player) => player.timePlayed > 400);
console.table("anyHardcorePlayers:", anyHardcorePlayers);

//
const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => acc + number, 0);
// console.log(total);

const total = numbers.reduce((acc, number) => {
  console.log("number:", number);
  console.log("acc:", acc);
  return acc + number;
}, 0);
console.log(total);

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 5 -> return 5 + 10
// accumulator = 15 -> number = 5 -> return 15 + 15
// accumulator = 30 -> number = 5 -> return 30 + 20
// accumulator = 50 -> number = 5 -> return 50 + 25

const petya = {
  username: "Petya",
  showThis() {
    console.log(this);
  },
  showName() {
    console.log(this.username);
  },
};

petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
petya.showName(); // 'Petya'

//
function showThis() {
  console.log("this in showThis: ", this);
}

// Вызываем в глобальном контексте
showThis(); // this in showThis: Window

const user = {
  username: "Mango",
};
// Записываем ссылку на функцию в свойство объекта
// Обратите внимание, что это не вызов - нет ()
user.showContext = showThis;

// Вызываем функцию в контексте объекта
// this будет указывать на текущий объект, в контексте
// которого осуществляется вызов, а не на глобальный объект.
user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}

//
const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

console.log(Object.values(salary));
const totalSalary = Object.values(salary).reduce((total, value) => {
  return total + value;
}, 0);
const totalSalary2 = Object.values(salary).reduce((total, value) => {
  return total + value;
}); // "0" можно и не ставиить!
console.log("totalSalary:", totalSalary);
console.log("totalSalary2:", totalSalary2);

//
// const totalTimePlayed = players.reduce((totalTime, value) => {
//   return totalTime + value.timePlayed;
// }, 0);
const totalTimePlayed = players.reduce(
  (totalTime, value) => totalTime + value.timePlayed,
  0
);

console.log("totalTimePlayed:", totalTimePlayed);

//
const cart = [
  { label: "Apples", price: 100, quantity: 2 },
  { label: "Bananas", price: 120, quantity: 3 },
  { label: "Lemons", price: 70, quantity: 4 },
];

// const totalAmount = cart.reduce(
//   (total, item) => total + item.price * item.quantity,
//   0
// );
const totalAmount = cart.reduce(
  (total, { price, quantity }) => total + price * quantity,
  0
);
console.table(cart);
console.log("totalAmount:", totalAmount);

//
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// const allTags = tweets.reduce((tags, tweet) => {
//   tags.push(...tweet.tags); // валидатор может ругатся - изменяем функцию!

//   return tags;
// }, []);
// console.table(allTags);
const allTags = tweets.reduce((tags, tweet) => [...tags, ...tweet.tags], []);
console.table(tweets);
console.log(allTags);

// tags = [], tweet.tags = ['js', 'nodejs'] return [...[], ...['js', 'node.js']]
// tags = [js', 'node.js'] tweet.tags ['html', 'css']
//    return [...['js', 'nodejs']], ...['html', 'css']
//    ['js', 'nodejs', 'html', 'css']

// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc);

//   if (acc[tag]) {
//     acc[tag] += 1;

//     return acc;
//   }
//   acc[tag] = 1;
//   return acc;
// }, {});

const tagsStats = allTags.reduce((acc, tag) => {
  return {
    ...acc,
    [tag]: acc[tag] ? (acc[tag] += 1) : 1,
  };
}, {});
console.log(tagsStats);

// const tagsStats = allTags.reduce(
//   (acc, tag) => ({
//     ...acc,
//     [tag]: acc[tag] ? (acc[tag] += 1) : 1,
//   }),
//   {}
// );

// example
const user3 = {
  name: "Mango",
};
const key = "name";
console.log(user3[key]);
console.log(user3["name"]);

// COPY ARRAY
const numbers3 = [1, 9, 16, 2, 3];
console.log("numbers3", numbers3);

const copy = [...numbers3];
console.log("copy", copy);
console.log("copy === numbers3", copy === numbers3);

const numSorted = [...numbers3].sort((a, b) => a - b);
console.log("numSorted", numSorted);

//
const sortedTimes = [...players].sort((a, b) => a.timePlayed - b.timePlayed);
console.table(sortedTimes);
const sortedNames = [...players].sort((a, b) => a.name.localeCompare(b.name));
console.table(sortedNames);
