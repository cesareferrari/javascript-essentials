let text = document.querySelector("#text");
let count = document.querySelector("#count");

text.addEventListener("input", () => {
  count.textContent = text.value.length;
})
