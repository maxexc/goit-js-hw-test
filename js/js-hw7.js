const addListenerBtn = document.querySelector('[data-action="add"]');

// btnCheck.addEventListener("click", () => {
//   console.log("Button was clicked");
// });

const handleClick = () => {
  console.log("Button was clicked");
};

addListenerBtn.addEventListener("click", handleClick);

const removeListenerBtn = document.querySelector('[data-action="remove"]');

removeListenerBtn.addEventListener(
  "click",
  () => {
    addListenerBtn.removeEventListener("click", handleClick);
    console.log("event listener was removed from btnCreate");
  },
  { once: true }
);

const mango = {
  username: "Mango",
  showUsername() {
    console.group(`${this.username} info:`);
    console.log(this);
    console.log(`My username is: ${this.username}`);
    console.groupEnd();
  },
};

const btnCheck = document.querySelector('[data-action="edit"]');

// ✅ Работает
// mango.showUsername();

// ❌ this будет ссылаться на button если использовать showUsername как callback
// btn.addEventListener("click", mango.showUsername); // не работает

// ✅ Не забывайте привязывать контекст методов объекта
btnCheck.addEventListener("click", mango.showUsername.bind(mango));
