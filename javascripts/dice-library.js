let roll = (
  function () {

    function d6 () {
      let d6 = [1, 2, 3, 4, 5, 6];
      shuffle(d6);
      return d6[0];
    }

    function d20 () {
      let d20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
      shuffle(d20);
      return d20[0];
    }


  /**
  * Randomly shuffle an array
  * https://stackoverflow.com/a/2450976/1293256
  * @param  {Array} array The array to shuffle
  * @return {Array}       The shuffled array
  */
  function shuffle (array) {

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

    return {d6, d20}

  }
)();


// dice arra// roll a 6 sided dice
// returns a number from 1 to 6
console.log(roll.d6());

// roll a 20 sided dice
// returns a number from 1 to 20
console.log(roll.d20());
