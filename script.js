const incrementElement = document.querySelector("#increment");
const decrementElement = document.querySelector("#decrement");
const resetElement = document.querySelector("#reset");
const counterElement = document.querySelector("#counter");
let counter = 0;

incrementElement.addEventListener("click", () => {
  counterElement.innerHTML = ++counter;
});
resetElement.addEventListener("click", () => {
  counterElement.innerHTML = 0;
  counter = 0;
});
decrementElement.addEventListener("click", () => {
  counterElement.innerHTML = --counter;
});
