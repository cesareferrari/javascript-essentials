let url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

let quote = document.querySelector("#quote");
let button = document.querySelector("#get-quote");

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
      quote.textContent = data[0];
    }).
    catch((err) => {
      quote.textContent = `Something went wrong! ${err}`;
    })
}

button.addEventListener("click", getQuote);

