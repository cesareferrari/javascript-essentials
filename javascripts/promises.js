let sayHello = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Hi, universe");
  }, 5000);
})

sayHello.then(function (msg) {
  console.log(msg);
})


let goodbye = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Goodbye!");
  }, 10000);
})

goodbye.then((msg) => {
  console.log(msg);
})

// chaining

let count = new Promise((resolve, reject) => {
  resolve(1);
})

count.then((num) => {
  console.log(num);
  return num + 1;
}).then((num) => {
  console.log(num);
  return num + 1;
}).then((num) => {
  console.log(num);
})
