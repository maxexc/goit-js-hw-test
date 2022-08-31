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

//
class Car2 {
  // Change code below this line

  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  // Change code above this line
}

const result = new Car2("Audi", "Q3", 36000);
console.log(result);

class Car3 {
  // Change code below this line
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code above this line
}
const result2 = new Car3({ brand: "Nissan", model: "Murano", price: 31700 });
console.log(result2);

//
class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }
  getValue() {
    return this.value;
  }
  padEnd(str) {
    this.value += str;
  }
  padStart(str) {
    this.value = str + this.value;
  }
  padBoth(str) {
    this.value = str + this.value + str;
  }
}

// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

//
class Car4 {
  // Change code below this line
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  getBrand() {
    return this.#brand;
  }
  changeBrand(newBrand) {
    this.#brand = newBrand;
  }

  // Change code above this line
}

const result3 = new Car4({ brand: "Nissan", model: "Murano", price: 31700 });
console.log(result3);

//
class Storage4 {
  // Change code below this line
  #items;

  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter((item) => item !== itemToRemove);
  }
}

// Change code above this line
const storage4 = new Storage4(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage4.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage4.addItem("Droid");
console.log(storage4.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage4.removeItem("Prolonger");
console.log(storage4.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]
