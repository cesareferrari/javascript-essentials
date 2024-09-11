class RollDice extends HTMLElement {
  constructor () {
    super();

    let btnText = this.innerHTML.trim();
    this.innerHTML = `
      <p>
        <button class="button">${btnText ? btnText : 'Roll dice here'}</button>
      </p>

      <div aria-live="polite"></div>
    `
  }
}

customElements.define('roll-dice', RollDice);
