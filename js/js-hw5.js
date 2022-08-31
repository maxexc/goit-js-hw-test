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

//
class StringBuilder2 {
  // Change code below this line
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value += str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

// Change code above this line
const builder2 = new StringBuilder2(".");
console.log(builder2.getValue()); // "."
builder2.padStart("^");
console.log(builder2.getValue()); // "^."
builder2.padEnd("^");
console.log(builder2.getValue()); // "^.^"
builder2.padBoth("=");
console.log(builder2.getValue()); // "=^.^="

//
class Car5 {
  // Change code below this line
  static MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice > Car5.MAX_PRICE) {
      return this.#price;
    } else if (newPrice <= Car5.MAX_PRICE) {
      return (this.#price = newPrice);
    }
  }

  // Change code above this line
}

const audi = new Car5({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

//
class Car6 {
  static #MAX_PRICE = 50000;
  static checkPrice(price) {
    if (price > Car6.#MAX_PRICE) {
      return "Error! Price exceeds the maximum";
    }
    return "Success! Price is within acceptable limits";
  }
  // Change code below this line

  // Change code above this line
  constructor({ price }) {
    this.price = price;
  }
}

const audi2 = new Car6({ price: 36000 });
const bmw2 = new Car6({ price: 64000 });

console.log(Car6.checkPrice(audi2.price)); // "Success! Price is within acceptable limits"
console.log(Car6.checkPrice(bmw2.price)); // "Error! Price exceeds the maximum"

//
class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Change code below this line

class Admin extends User {
  static AccessLevel = { BASIC: "basic", SUPERUSER: "superuser" };
}

console.log(Admin.AccessLevel.BASIC);

//
class User7 {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin5 extends User7 {
  // Change code below this line
  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel, blacklistedEmails }) {
    super(email);
    this.accessLevel = accessLevel;
    this.blacklistedEmails = [];
  }
  blacklist(email) {
    this.blacklistedEmails.push(email);
  }
  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }

  // Change code above this line
}

const mango = new Admin5({
  email: "mango@mail.com",
  accessLevel: Admin5.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
