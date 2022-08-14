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

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  for (const element of order) {
    element = Number(element);
    console.log((total += element));
  }

  // Change code above this line
  return total;
}
calculateTotalPrice([12, 85, 37, 4]);
