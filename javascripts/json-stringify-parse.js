// save an object
let lunch = {
  sandwich: "Turkey",
  chips: "Cape Cod",
  drink: "Pepsi"
}

localStorage.setItem('lunchOrder', JSON.stringify(lunch));

// save an array
let drinks = ['Pepsi', 'Water', 'Lemonade'];

localStorage.setItem('drinkOptions', JSON.stringify(drinks));

// get data from local storage
let savedLunch = JSON.parse(localStorage.getItem('lunchOrder'));
let savedDrinks = JSON.parse(localStorage.getItem('drinkOptions'));

console.log(savedLunch);
console.log(savedDrinks);

for (let drink of savedDrinks) {
  console.log(drink);
}

