// Extend the HTMLElement class to create the web component
class GreetingMessage extends HTMLElement {

  constructor () {
    super();

    let btnText = this.innerHTML.trim();

    this.innerHTML = `
      <p>
        <button class="button">${btnText ? btnText : 'Hi, there!'}</button>
      </p>

      <div class="message" aria-live="polite"></div>
    `;
  }

  connectedCallback () {
    console.log("Connected.", this);
  }

  disconnectedCallback () {
    console.log("Disconnected.", this);
  }
}

// Register the custom element
if ('customElements' in window) {
  customElements.define('greeting-message', GreetingMessage);
}


// another custom web component
class CompanyCard extends HTMLElement {
  constructor () {
    super();

    this.innerHTML = `
    <div>
    ${this.hasAttribute('wave') ? '&#128075;' : ''}
      Hello world!
    </div>
    `
  }
}

if ('customElements' in window) {
  customElements.define('company-card', CompanyCard);
}
