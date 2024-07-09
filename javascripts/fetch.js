let url = "https://jsonplaceholder.typicode.com/postsx";

// fetch(url).
//   then((response) => {
//     return response.json();
//   }).
//   then((data) => {
//     console.log(data);
//   }).
//   catch((error) => {
//     console.log(error);
//   })

fetch(url).
  then((response) => {
    if (response.ok) {
      return response.json();
    } 

    return Promise.reject(response)
  }).
  then((data) => {
    console.log(data);
  }).
  catch((err) => {
    console.warn("Something went wrong", err);
  })
