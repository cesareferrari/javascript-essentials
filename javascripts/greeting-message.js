// Extend the HTMLElement class to create the web component
class GreetingMessage extends HTMLElement {

  constructor () {
    super();

    this.innerHTML = `
      <p>
        <button class="button">Hi there.</button>
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

