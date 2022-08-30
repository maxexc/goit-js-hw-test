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
