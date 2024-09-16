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

  // create a list of attributes to observe
  static get observedAttributes () {
    return ['logout'];
  }

  // runs when a value of an attribute is changed on the component
  attributeChangedCallback (name, oldValue, newValue) {
    // remove button
    let btn = this.querySelector('button');
    if (btn) {
      btn.removeEventListener('click', this.clickHandler);
      btn.remove();
    }

    // get the `message` element
    let target = this.querySelector('.message');
    if (target) {
      // inject the message into the UI
      let name = this.getAttribute('name');
      target.textContent = `Bye ${name ? name : 'friend'}`
    }
  }

  // Handle click events on the button
  clickHandler (event) {
    // get the host component
    let host = event.target.closest('greeting-message')

    // get the message element
    let target = host.querySelector('.message')
    if (!target) return;

    // inject the message into the UI
    target.textContent = "Hi there, friend! Have a good day."

    // clear the message after 5 seconds
    setTimeout(function () {
      target.textContent = "";
    }, 5000);
  }

  connectedCallback () {
    let btn = this.querySelector('button');
    if (!btn) return;
    btn.addEventListener("click", this.clickHandler);
  }

  disconnectedCallback () {
    // remove the click event listener from the button
    let btn = this.querySelector('button');
    if (!btn) return;
    btn.removeEventListener("click", this.clickHandler);
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
