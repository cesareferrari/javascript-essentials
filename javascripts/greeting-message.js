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
    let btn = this.querySelector('button');
    if (!btn) return;
    btn.addEventListener("click", function (event) {
      console.log("Inside event listener `this` is: ", this);

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
    })
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
