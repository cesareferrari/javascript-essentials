let url = "https://jsonplaceholder.typicode.com/posts/";

function traditionalFn () {
  fetch(url).
    then((response) => {
      return response.json();
    }).
    then((data) => {
      console.log("Traditional Fetch", data);
    })

  console.log("Traditional Message");
}

traditionalFn();


async function asyncFn () {
  await fetch(url).
    then((response) => {
      return response.json();
    }).
    then((data) => {
      console.log("Async Fetch", data);
    })

  console.log("Async Message");
}

asyncFn();




// function getArticleById (id) {
//   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).
//     then((response) => {

//       if (response.ok) {
//         return response.json();
//       }

//       throw "Something went wrong."
//     }).
//     then((data) => {
//       console.log(data);
//     }).
//     catch((err) => {
//       console.warn(err);
//     })
// }

// getArticleById(3)


async function getArticleById (id) {
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!response.ok) {
    throw "Something went wrong.";
  }

  let data = await response.json();

  console.log(data);
}

getArticleById(3)
