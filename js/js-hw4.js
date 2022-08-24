// function multiply(...args) {
//   //   console.log(args);
//   const result = [];
//   for (const arg of args) {
//     result.push(...args);
//   }
//   return console.log(result); // массив всех аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

//
function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber); // Значение первого аргумента
  console.log(secondNumber); // Значение второго аргумента
  console.log(otherArgs); // Массив остальных аргументов
}

// multiply(1, 2);
// multiply(1, 2, 3);
multiply(1, 2, 3, 4);

const temps = [18, 14, 12, 27, 29, 24];

console.log(Math.max(1, 4, 27, 5, 9));
console.log(Math.min(temps));
console.log(Math.min(...temps));
