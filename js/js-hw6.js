const magicBtn = document.querySelector(".js-magic-btn");

// console.log(window);

// console.log(document);

// console.dir(document);

// const navRef;
// const navEl = document.querySelector("ul");
// console.dir(navEl);

// const navItemEl = document.querySelector("li");
const navItemEl = document.querySelector(".site-nav__item"); // id=132 ("#132");
console.log(navItemEl);

// const navLinksEl = document.querySelector(".site-nav__link3232");  // null
const navLinksEl = document.querySelectorAll(".site-nav__link");
// const navLinksEl = document.querySelectorAll(".site-nav .site-nav__link");
// const navLinksEl = document.querySelectorAll(".site-nav__link121"); // []
console.log("navLinksEl", navLinksEl);

// magicBtn.addEventListener("click", () => {});

magicBtn.addEventListener("click", () => {
  const imageEl = document.querySelector(".hero__image");
  console.log("imageEl", imageEl);
  console.log(imageEl.src);
  imageEl.src =
    "https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480";
});
// //
