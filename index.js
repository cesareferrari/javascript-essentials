document.addEventListener("click", (event) => {
  let toggle = event.target;

  if (!toggle.form) { return };

  let passwordFields = toggle.form.querySelectorAll('[password-field]')

  if (toggle.checked) {
    for (let field of passwordFields) {
      field.type = "text";
    }     
  } else {
    for (let field of passwordFields) {
      field.type = "password";
    }     
  }
})



// let toggle = document.querySelector('#show-passwords');
// let passwordFields = document.querySelectorAll('[type="password"]');


// toggle.addEventListener("click", () => {
//   for (let field of passwordFields) {
//     if (toggle.checked) {
//       field.type = 'text';
//     } else {
//       field.type = 'password';
//     }
//   }
// })


let para = document.querySelector("[data-paragraph]");
let snack = document.createElement("p");
snack.textContent = "Banana";
snack.setAttribute("data-snack", "");


para.addEventListener("click", (event) => {

  if (event.target.matches("[data-snack]")) {
    console.log("You found a snack");
  } else if (event.target.matches("[data-add-snack]")) {
    para.append(snack);
  } else {
    console.log("This is a number");
  }
})



