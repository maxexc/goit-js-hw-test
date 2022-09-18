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

const form = document.querySelector(".register-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { username, password },
  } = event.currentTarget;
  console.log(username.value, password.value);
});

// pizza

const select = document.querySelector(".pizza-select");
const textOutput = document.querySelector(".text-output");
const valueOutput = document.querySelector(".value-output");

setOutput();

select.addEventListener("change", setOutput);

function setOutput() {
  const selectedOptionValue = select.value;
  const selectedOptionIndex = select.selectedIndex;
  const selectedOptionText = select.options[selectedOptionIndex].text;

  textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;
}

// input value

const textInput = document.querySelector(".text-input");
const output = document.querySelector(".output");

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
});
