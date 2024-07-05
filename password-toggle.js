document.addEventListener("click", (event) => {
  if (!event.target.matches("[data-pw-toggle]")) return;

  let selector = event.target.getAttribute('data-pw-toggle');
  let passwords = document.querySelectorAll(selector);

  for (let password of passwords) {
    if (event.target.checked) {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }
})
