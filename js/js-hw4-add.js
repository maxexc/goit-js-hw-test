const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

// // Change code below this line
// const getUserNames = users.map((user) => user.name);
// console.log(getUserNames);
// // Change code above this line

// Change code below this line
const getUserNames = (users) => {
  const userNameArray = [];
  users.map((user) => userNameArray.push(user.name));

  return userNameArray;
};
// console.log(userNameArray);

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter((number) => number % 2 === 0);
const oddNumbers = numbers.filter((number) => number % 2 > 0);

console.log(evenNumbers);
console.log(oddNumbers);

//

// Change code below this line
const getUsersWithEyeColor = (users, color) => {
  const eyeColorArray = [];
  eyeColorArray.push(...users2.filter((user) => user.eyeColor === color));

  return eyeColorArray;
};
// Change code above this line

const getUsersWithAge = (users, minAge, maxAge) =>
  user.filter((user) => user.age > minAge && user.age < maxAge);

// return usersAgeArray;

// Change code above this line

// getUsersWithAge = (users, 20, 30);
// console.log(getUsersWithAge.users);

// Change code below this line
// const getFriends = (users) =>
//   users.filter(
//     (user, index, arrayFriends) => arrayFriends.indexOf(user) === index
//   );

// Change code above this line

// Change code below this line
const getFriends = (users) =>
  users
    .flatMap((user) => user.friends)
    .filter(
      (friend, index, arrayFriends) => arrayFriends.indexOf(friend) === index
    );

console.log(getFriends);

// Change code above this line

const players1 = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players1); // [1270, 468, 710, 244]
console.log("playtimes:", playtimes);
// Change code below this line

const totalPlayTime = playtimes.reduce((previousValue, time) => {
  return previousValue + time;
}, 0);
console.log(totalPlayTime);

// Change code above this line
const averagePlayTime = totalPlayTime / playtimes.length;
console.log(averagePlayTime);

//
const players2 = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players2.reduce((total, player) => {
  return total + player.playtime / player.gamesPlayed;
}, 0);

console.log("Total:", totalAveragePlaytimePerGame);

//
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = books
  .filter((book) => book.rating > MIN_BOOK_RATING)
  .map((book) => book.author)
  .sort((a, b) => a.localeCompare(b));

console.log(names);

//
// Change code below this line
const getSortedFriends = (users3) =>
  [...users3]
    .flatMap((user) => user.friends)
    .filter((course, index, array) => array.indexOf(course) === index)
    .sort((a, b) => a.friends.localeCompare(b.friends));

//
// examples Repeta

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, point: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, point: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, point: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, point: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, point: 48, online: true },
];

const doubledNums = numbers.map(function (number) {
  console.log(number);

  return number * 2;
});

console.log("numbers", numbers);
console.log("doubledNums", doubledNums);
