let TreasureChest = (function () {
  let amount = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];

  function Constructor (options = {}) {

    // Combine user options with defaults
    let {bronze, silver, gold, loot} = Object.assign({
      bronze: 0,
      silver: 0,
      gold: 0,
      loot: "You have some loot"
    }, options)

    Object.defineProperties(this, {
      bronze: {
        value: bronze,
        writable: true
      },
      silver: {
        value: silver,
        writable: true
      },
      gold: {
        value: gold,
        writable: true
      },
      _loot: {
        value: loot
      }
    })
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


let captain = new TreasureChest({
  gold: 12,
  bronze: 4
});

let gold = captain.gold;
console.log(gold);  // 12

let firstMate = new TreasureChest();
let silver = firstMate.silver;
console.log(silver);  // 0

