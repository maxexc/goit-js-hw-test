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

// ----event bubbling----

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const descendant = document.querySelector("#descendant");

parent.addEventListener("click", () => {
  alert("Parent click handler");
});

child.addEventListener("click", () => {
  alert("Child click handler");
});

descendant.addEventListener("click", () => {
  alert("Descendant click handler");
});

// click
const boxRef = document.querySelector(".js-box");
const colorTextRef = document.querySelector(".js-inner-box");
boxRef.addEventListener("mouseenter", onMouseEnter);
// boxRef.addEventListener("mouseover", onMouseEnter);
boxRef.addEventListener("mouseleave", onMouseLeave);
// boxRef.addEventListener("mouseenter", onMouseMove); // coordinats mouse
colorTextRef.addEventListener("click", mouseChangeColor);

function onMouseEnter(event) {
  const box = event.currentTarget;
  box.classList.add("box--active");
}

function onMouseLeave(event) {
  const box = event.currentTarget;
  box.classList.remove("box--active");
  colorTextRef.style.color = "#90ee90";
}

function onMouseMove(event) {
  console.log(event);
}

function mouseChangeColor(event) {
  colorTextRef.style.color = "#ff0000";
}

// События focus & blur, input & change, checkbox properties

// const input = document.querySelector(".js-input");
// const nameLabel = document.querySelector(".js-button > span");
// const licenseCheckbox = document.querySelector(".js-license");
// const btn = document.querySelector(".js-button");

const refs = {
  input: document.querySelector(".js-input-reg"),
  nameLabel: document.querySelector(".js-button > span"),
  licenseCheckbox: document.querySelector(".js-license"),
  btn: document.querySelector(".js-button"),
}; // сразу видно ссылки

// refs.input.addEventListener("focus", onInputFocus);
// refs.input.addEventListener("blur", onInputBlur);

// refs.input.addEventListener("change", onInputChange); // только на checkBox & radioBtn
// refs.input.addEventListener("input", onInputChange);

refs.input.addEventListener("input", onInputChange);
refs.licenseCheckbox.addEventListener("change", onLicenseChange);

function onInputFocus() {
  console.log("Инпут получил фокус - событие focus");
}

function onInputBlur() {
  console.log("Инпут потерял фокус - событие blur");
}

function onInputChange(event) {
  // console.log(event.currentTarget.value);
  refs.nameLabel.textContent = event.currentTarget.value;
}

function onLicenseChange(event) {
  console.log(event.currentTarget.checked);
  console.log("refs.btn.disabled", refs.btn.disabled);

  refs.btn.disabled = !event.currentTarget.checked;
}
