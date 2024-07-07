let text = document.querySelector("#text");
let characterCount = document.querySelector("#character-count");
let wordCount = document.querySelector("#word-count")

text.addEventListener("input", () => {
  characterCount.textContent = text.value.length;

  let words = text.value.split(/[\s]+/g).filter((word) => {
    return word.length;
  });

  wordCount.textContent = words.length;
})
