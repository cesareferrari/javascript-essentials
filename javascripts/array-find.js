let sandwichContainer = document.querySelector("#sandwich-container");
let sandwiches = sandwichContainer.querySelectorAll("li");
console.log(sandwiches);

let names = [];

sandwiches.forEach((sandwich) => {
  return names.push(sandwich.textContent);
})

console.log(names);

let preferredSandwich = names.find((name) => {
  return name === 'Ham';
})

console.log(preferredSandwich);
