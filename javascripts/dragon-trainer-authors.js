let url = "https://vanillajsacademy.com/api/dragons.json";
let urlAuthors = "https://vanillajsacademy.com/api/dragons-authors.json";
let app = document.querySelector("#app");

Promise.all([
  fetch(url), fetch(urlAuthors)
]).
  then((responses) => {
    return Promise.all(responses.map((response) => {
      return response.json();
    }))
  }).
  then((data) => {
    // render them into the DOM
    render(data[0].articles, data[1].authors);
  }).
  catch((error) => {
    console.warn(error);
    renderFail();
  })

function getAuthor (name, authors) {
  return authors.find((author) => {
    return author.author === name;
  })
}

function render (articles, authors) {

  // if there are no articles to show
  if (!articles || articles.length < 1) {
    renderFail();
    return;
  }

  // Create a new array of markup strings with array.map(), then
  // combine them into one string with array.join(), then
  // insert them into the DOM with innerHTML
  app.innerHTML = articles.map((article) => {
    let author = getAuthor(article.author, authors);
    return `
    <article>
      <h2><a href="${article.url}">${article.title}</a></h2>
      <p><em>By ${author ? `${author.author} - ${author.bio}` : article.author}</em></p>
      <p>${article.article}</p>
    </article>
    `
  }).join('');
}

function renderFail () {
  app.innerHTML = "<p>Failed to render articles.</p>"
}

