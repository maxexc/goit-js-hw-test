function calculateTotal(number) {
  // Change code below this line
  let sum = 0;
  for (let i = 0; i <= number; i += 1) {
    sum += i;
  }
  console.log(sum);
  return sum;
  // Change code above this line
}
calculateTotal(1);
calculateTotal(3);
calculateTotal(7);
calculateTotal(18);
calculateTotal(24);
