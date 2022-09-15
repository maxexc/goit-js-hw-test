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

// //
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

function handlerInput(evt) {
  console.dir(evt.currentTarget.value);
}
