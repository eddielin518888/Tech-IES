const button = document.querySelector(".box");
const clicks = document.querySelector("span");
let clickCount = 0;
button.addEventListener("click", () => {
  clicks.textContent = clicks.textContent.slice(0, 8) + ++clickCount;
});
