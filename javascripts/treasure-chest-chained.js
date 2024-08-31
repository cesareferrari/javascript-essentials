let TreasureChest = (function () {
  let amount = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];

  function Constructor () {
    this.bronze = 0;
    this.silver = 0;
    this.gold = 0;
  }

  // adding the `sample` method to the Array prototype
  // so it returns a random number from the array
  Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)]
  }

  Constructor.prototype.addBronze = function (num) {
    this.bronze += num;
    return this;
  }

  Constructor.prototype.addSilver = function (num) {
    this.silver += num;
    return this;
  }

  Constructor.prototype.addGold = function (num) {
    this.gold += num;
    return this;
  }

  Constructor.prototype.getLoot = function () {
    return `You have ${this.bronze} bronze, ${this.silver} silver, and ${this.gold} gold.`
  }

  Constructor.getRandomLoot = function () {
    return amount.sample();
  }

  return Constructor;
})();


let captain = new TreasureChest();

captain.addBronze(42).addSilver(4).addGold(12);
console.log(captain.getLoot());

captain.addBronze(10).addSilver(10).addGold(10);
console.log(captain.getLoot());

console.log(TreasureChest.getRandomLoot());
