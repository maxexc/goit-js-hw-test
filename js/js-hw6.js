const magicBtn = document.querySelector(".js-magic-btn");

// console.log(window);

// console.log(document);

// console.dir(document);

// const navRef;
// const navEl = document.querySelector("ul");
// console.dir(navEl);

magicBtn.addEventListener("click", () => {
  // const navItemEl = document.querySelector("li");
  const navItemEl = document.querySelector(".site-nav__item"); // id=132 ("#132");
  console.log(navItemEl);

  // const navLinksEl = document.querySelector(".site-nav__link3232");  // null
  const navLinksEl = document.querySelectorAll(".site-nav__link");
  // const navLinksEl = document.querySelectorAll(".site-nav .site-nav__link");
  // const navLinksEl = document.querySelectorAll(".site-nav__link121"); // []
  console.log("navLinksEl", navLinksEl);
});

// magicBtn.addEventListener("click", () => {});

magicBtn.addEventListener("click", () => {
  const imageEl = document.querySelector(".hero__image");
  console.log("imageEl", imageEl);
  console.log(imageEl.src);
  imageEl.src =
    "https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480";
  imageEl.alt = "This new kat";
});

const heroTitleEl = document.querySelector(".hero__title");
console.log("heroTitleEl", heroTitleEl);
console.log(heroTitleEl.textContent);
// heroTitleEl.textContent = "I`m sweet Kitty";

const imageEl = document.querySelector(".hero__image");
// console.log(imageEl);
console.log(imageEl.getAttribute("src")); // любой атрибут можно прочитать/изменить
console.log(imageEl.src);

// imageEl.removeAttribute("src");
console.log("imageEl.hasAttribute_src:", imageEl.hasAttribute("src"));
console.log("imageEl.hasAttribute_src5454:", imageEl.hasAttribute("src5454"));
// //

const actions = document.querySelectorAll(".js-actions button");
console.log(actions[0].dataset);
console.log(actions[0].dataset.action);
console.log(actions[1].dataset.action);

console.log(actions[1].getAttribute("data-action"));

magicBtn.addEventListener("click", () => {
  const inputEl = document.querySelector(".js-input");
  console.log(inputEl.value);
  //   inputEl.value = "wertr";

  //   navEl.classList.add("super-cool", "qweqwe"); // add class
  //   navEl.classList.remove("super-cool", "qweqwe"); // delete class
});

const navEl = document.querySelector(".site-nav");
console.log(navEl.classList);

// magicBtn.addEventListener("click", () => {
//     navEl.classList.add("super-cool", "qweqwe"); // add class
//     navEl.classList.remove("super-cool", "qweqwe"); // delete class
//     navEl.classList.replace("super-cool", "qwerty"); //  class super-cool =>qwerty

// });
magicBtn.addEventListener("click", () => {
  navEl.classList.toggle("qwerty"); // add/remove class
  console.log("qwerty exist?", navEl.classList.contains("qwerty"));
});
// поиск атрибута

const currentPageUrl = "/portfolio";
// const currentPageUrl = "/contact";

const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"]`
);
console.log(linkEl);
linkEl.classList.add("site-nav__link--current");

// //

//

//

//

//
const button = document.querySelector(".hello");
const item = document.querySelector(".item");
let value = 1;

// button.addEventListener("click", onclick, { once: true }); // один раз работет
button.addEventListener("click", onclick);
function onclick(event) {
  //   console.log(event);
  //   console.dir(event.currentTarget);
  //   button.textContent = "World";
  value += 1;
  console.dir(item.style.fontSize);
  item.style.fontSize = value * 10 + "px";
  item.classList.toggle("invalid");
}
console.log(button);

const input = document.querySelector(".input");
input.addEventListener("input", handlerInput);

function handlerInput(evnt) {
  console.dir(evnt.currentTarget.value);
}

const form = document.querySelector(".form");
// const input = document.querySelector('.input');
form.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  console.dir(evt.currentTarget);
  console.dir(evt.currentTarget.email);
  console.log(input.value);
}

// const add = document.addEventListener("click", pushClick);

// function onBoard(evt) {
//   if (evt.code === "Escape") {
//     const box = document.querySelector(".box");
//     box.remove();
//     document.removeEventListener("keyup", onBoard);
//   }
//   return;
// }

// function pushClick() {
//   document.body.insertAdjacentHTML("beforeend", '<div class="box"></div>');
//   document.addEventListener("keyup", onBoard);
// }

// const navEl = document.querySelector(".site-nav"); // UP
// const firstNavItemEl = navEl.querySelector(".site-nav__item");
const firstNavItemEl = navEl.firstElementChild; // the same
console.log(firstNavItemEl);

console.log(navEl.children);
console.log(navEl.children[1]);

//

const titleEl = document.createElement("h1");
titleEl.classList.add("page-title");
titleEl.textContent = "Это заголовок страницы :)";
console.log(titleEl);

document.body.appendChild(titleEl);
// console.log(document.body);

const image2El = document.createElement("img");
image2El.src =
  "https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg";
image2El.alt = "alpine-mountains";

// image2El.setAttribute("width", 640);
image2El.width = 640;
console.log(image2El.width);
console.log(image2El);

document.body.appendChild(image2El);

const navItemEl = document.createElement("li");
navItemEl.classList.add("site-nav__item");

const navLinkEl = document.createElement("a");
navLinkEl.classList.add("site-nav__link");
navLinkEl.textContent = "Личный кабинет";
navLinkEl.href = "/profile";

console.log(navLinkEl);

navItemEl.appendChild(navLinkEl); // a in=> li
console.log(navItemEl);

navEl.appendChild(navItemEl); // li in=> ul
// navEl.insertBefore(navItemEl, navEl.firstElementChild);
// navEl.insertBefore(navItemEl, navEl.lastElementChild);
// navEl.insertBefore(navItemEl, navEl.children[1]);
console.log(navEl);

const heroEl = document.querySelector(".hero");
// heroEl.appendChild(titleEl);
// heroEl.appendChild(image2El); // or

heroEl.append(titleEl, image2El);

// collections

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const colorPickerContainerEl = document.querySelector(".js-color-picker");

// NEW NEW NEW
// const elements = colorPickerOptions.map((option) => {
//   const buttonEl = document.createElement("button");
//   buttonEl.type = "button";
//   buttonEl.classList.add("color-picker__option");
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;
//   // buttonEl.style.width = 40;

//   return buttonEl;
// });

// OLD OLD OLD
// const elements = [];

// for (let i = 0; i < colorPickerOptions.length; i += 1) {
//   const option = colorPickerOptions[i];

//   const buttonEl = document.createElement("button");
//   buttonEl.type = "button";
//   buttonEl.classList.add("color-picker__option");
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;
//   // buttonEl.style.width = 40;

//   elements.push(buttonEl);
// }
// console.log(elements);

// function

const makeColorPickerOptions = (options) => {
  // const els = options.map((option) => {
  //   const buttonEl = document.createElement("button");
  //   buttonEl.type = "button";
  //   buttonEl.classList.add("color-picker__option");
  //   buttonEl.textContent = option.label;
  //   buttonEl.style.backgroundColor = option.color;
  //   // buttonEl.style.width = 40;

  //   return buttonEl;
  // });
  // return els;

  return options.map((option) => {
    const buttonEl = document.createElement("button");
    buttonEl.type = "button";
    buttonEl.classList.add("color-picker__option");
    buttonEl.textContent = option.label;
    buttonEl.style.backgroundColor = option.color;
    // buttonEl.style.width = 40;

    return buttonEl;
  });
};

const elements = makeColorPickerOptions(colorPickerOptions);
console.log(elements);
colorPickerContainerEl.append(...elements);

// создаем карточку продукта

const product = {
  name: "Сервоприводы",
  descrption: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  price: 2000,
  available: true,
  onSale: true,
};

{
  /* <article class="product">
  <h2 class="product__name">Название</h2>
  <p class="product__descr">Описание</p>
  <p poduct__pridict>Цена</p>
</article> */
}

const productEl = document.createElement("article");
productEl.classList.add("product");

const nameEl = document.createElement("h2");
nameEl.classList.add("product__name");
nameEl.textContent = product.name;

const descrEl = document.createElement("p");
descrEl.textContent = product.descrption;
descrEl.classList.add("product__descr");

console.log(productEl);
console.log(nameEl);
console.log(descrEl);
