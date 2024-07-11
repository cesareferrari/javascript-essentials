let url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

let quoteContainer = document.querySelector("#quote-container");
let button = document.querySelector("#get-quote");
let quotes = [];

getQuote();

function getQuote () {
  fetch(url).
    then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw response.status;
    }).
    then((data) => {
      if (quotes.length > 49) {
        quotes.shift();
      }

      if (quotes.includes(data[0])) {
        getQuote();
        return;
      }

      quoteContainer.textContent = data[0];
      quotes.push(data[0])
    }).
    catch((err) => {
      quote.textContent = `Something went wrong! ${err}`;
    })
}


button.addEventListener("click", getQuote);

