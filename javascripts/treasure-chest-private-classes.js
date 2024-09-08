class TreasureChest {

  #bronze;
  #silver;
  #gold;
  #loot;


  constructor (options = {}) {

    // Combine user options with defaults
    let {bronze, silver, gold, loot} = Object.assign({
      bronze: 0,
      silver: 0,
      gold: 0,
      loot: `You have {{gold}} gold, {{silver}} silver, and {{bronze}} bronze.`
    }, options)

    // Set instance properties
    this.#bronze = bronze;
    this.#silver = silver;
    this.#gold = gold;
    this.#loot = loot;
  }

  static #shuffle (array) {

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
    this.#bronze += num;
    return this;
  }

  addSilver (num) {
    this.#silver += num;
    return this;
  }

  addGold (num) {
    this.#gold += num;
    return this;
  }

  getBronze () {
    return this.#bronze;
  }

  getSilver () {
    return this.#silver;
  }

  getGold () {
    return this.#gold;
  }

  getLoot () {
    return this.#loot.replace('{{gold}}', this.#gold).replace('{{silver}}', this.#silver).replace('{{bronze}}', this.#bronze);
  }

  static getRandomLoot () {
    let amount = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
    let type = ['bronze', 'silver', 'gold'];

    this.#shuffle(amount);
    this.#shuffle(type);

    return {
      amount: amount[0],
      type: type[0]
    };
  }
}


// create an instance
let captain = new TreasureChest();

// try to break the library
// captain.gold = 123;
// captain.#gold = 456;

// try to access private methods
// captain.shuffle([1, 2, 3]);
// captain.#shuffle([4, 5, 6]);

let loot = captain.getLoot();
console.log(loot);

