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
