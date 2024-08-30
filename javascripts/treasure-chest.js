let TreasureChest = (function () {
  function Constructor () {
    this.bronze = 0;
    this.silver = 0;
    this.gold = 0;
  }

  Constructor.prototype.addBronze = function (num) {
    this.bronze += num;
    return this.bronze;
  }

  Constructor.prototype.addSilver = function (num) {
    this.silver += num;
    return this.silver;
  }

  Constructor.prototype.addGold = function (num) {
    this.gold += num;
    return this.gold;
  }

  Constructor.prototype.getLoot = function () {
    return `You have ${this.bronze} bronze, ${this.silver} silver, and ${this.gold} gold.`
  }

  return Constructor;
})();


let captain = new TreasureChest();
let firstMate = new TreasureChest();

captain.addGold(12);
captain.addSilver(4);

let bronze = captain.bronze;
let silver = captain.silver;
let gold = captain.gold;
let total = captain.getLoot();

console.log("Bronze: ", bronze);
console.log("Silver: ", silver);
console.log("Gold: ", gold);
console.log("Total: ", total);

captain.addGold(3);
console.log("New gold: ", captain.gold);
console.log("New total: ", captain.getLoot());
