let sayHello = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Hello world");
  }, 5000)
});

sayHello.
  then((msg) => {
    console.log(msg)
    return msg
  }).
  then((msg) => {
    msg += " and hello universe"
    console.log(msg);
  })
