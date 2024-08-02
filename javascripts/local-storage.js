let data = "My data to store";
localStorage.setItem("my-key", data);

let dataSaved = localStorage.getItem('my-key');
console.log(dataSaved);

localStorage.removeItem('my-key');
