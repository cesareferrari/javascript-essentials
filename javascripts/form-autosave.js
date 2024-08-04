let form = document.querySelector("#save-me");
let prefix = "autosave_";

form.addEventListener('input', inputHandler);
form.addEventListener('submit', clearStorage);

function inputHandler (event) {
  let field = event.target;
  if (!field.id) return;
  localStorage.setItem(prefix + field.id, field.value);
}

function loadSaved () {
  let fields = form.elements;

  for (let field of fields) {
    let saved = localStorage.getItem(prefix + field.id);
    if (!saved) continue;
    field.value = saved;
  }
}

function clearStorage () {
  let fields = form.elements;

  for (let field of fields) {
    localStorage.removeItem(prefix + field.id);
  }
}

loadSaved();
