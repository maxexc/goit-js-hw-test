const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  // Change code below this line
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
  // Change code above this line
};

pizzaPalace.order("Four meats");
console.log(pizzaPalace.order("Four meats"));
pizzaPalace.order("Big Mike");
console.log(pizzaPalace.order("Big Mike"));

//
const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],
  // Change code below this line
  getOrdersLog() {
    return this.orders
      .map((order) => `email: ${order.email} dish: ${order.dish}`)
      .join(" - ");
  },
  getEmails() {
    const emails = this.orders.map((order) => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter((order) => order.email === email);
  },
  // Change code above this line
};
historyService.getOrdersLog();
historyService.getEmails();
historyService.getOrdersByEmail("solomon@topmail.net");
console.log(historyService.getOrdersLog());
console.log(historyService.getEmails());
console.log(historyService.getOrdersByEmail("solomon@topmail.net"));

// ПРОТОТИП ОБЪЕКТА
//
const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};
// Change code below this line

const child = Object.create(parent);

// Change code above this line
child.name = "Jason";
child.age = 27;

child.hasOwnProperty("name");
console.log('child.hasOwnProperty("name")', child.hasOwnProperty("name"));
child.heritage;
console.log(child.heritage);
child.hasOwnProperty("heritage");
console.log(
  "child.hasOwnProperty(heritage):",
  child.hasOwnProperty("heritage")
);

//
class Car {}

// test = new Car();
console.log(new Car());
