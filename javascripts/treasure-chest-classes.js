class TreasureChest {


  constructor (options = {}) {


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

  static shuffle (array) {

    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;

  }

  addBronze (num) {
    this.bronze += num;
    return this;
  }

  addSilver (num) {
    this.silver += num;
    return this;
  }

  addGold (num) {
    this.gold += num;
    return this;
  }

  getLoot () {
    return `You have ${this.bronze} bronze, ${this.silver} silver, and ${this.gold} gold.`
  }

  static getRandomLoot () {
    let amount = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];

    this.shuffle(amount);
    return this.amount[0];
  }
}


let captain = new TreasureChest({
  gold: 12,
  bronze: 4
});

let gold = captain.gold;
console.log(gold);  // 12

let firstMate = new TreasureChest();
let silver = firstMate.silver;
console.log(silver);  // 0

