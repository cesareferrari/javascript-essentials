let url = "https://vanillajsacademy.com/api/dragons.json";

let app = document.querySelector("#app");

async function getArticles () {
  try {
    let response = await fetch(url);

    if (!response.ok) throw response.status;

    let data = await response.json();

    let titles = data.articles.map((article) => {
      return `
        <article>
          <h2><a href="${article.url}">${article.title}</a></h2>
          <h3>by ${article.author}</h3>
          <p>${article.article}</p>
        </article>`
    }).join(" ");

    app.innerHTML = titles;

  } catch (error) {
    app.textContent = `We couldn't fetch the articles.`;
  }
}

getArticles();
