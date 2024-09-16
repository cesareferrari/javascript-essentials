class RollDice extends HTMLElement {
  #dice;

  constructor () {
    super();

    // define properties
    this.#dice = [1, 2, 3, 4, 5, 6];

    // Render HTML
    let btnText = this.innerHTML.trim();
    this.innerHTML = `
      <p>
        <button class="button">${btnText ? btnText : 'Roll dice here'}</button>
      </p>

      <div class="message" aria-live="polite"></div>
    `
  }

  /**
  * Randomly shuffle an array
  * https://stackoverflow.com/a/2450976/1293256
  * @param  {Array} array The array to shuffle
  * @return {Array}       The shuffled array
  */
  #shuffle (array) {

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

  // shuffle dice array and return first number
  #roll () {
    this.#shuffle(this.#dice);
    return this.#dice[0];
  }

  connectedCallback () {
    let btn = this.querySelector('button');
    if (!btn) return;
    btn.addEventListener('click', this.clickHandler);
  }

  disconnectedCallback () {
    let btn = this.querySelector('button');
    if (!btn) return;
    btn.removeEventListener('click', this.clickHandler);
  }

  clickHandler (event) {
    let host = event.target.closest('roll-dice');
    let target = host.querySelector('.message');
    if (!target) return;

    //roll the dice
    let roll = host.#roll();
    
    // inject the message into the UI
    target.textContent = `You rolled a ${roll}`;
  }

}

customElements.define('roll-dice', RollDice);
