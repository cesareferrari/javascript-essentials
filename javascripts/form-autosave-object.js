let form = document.querySelector("#save-me");
let prefix = "autosave_fields";

form.addEventListener('input', inputHandler);
form.addEventListener('submit', clearStorage);

/**
 * Serialize all form data into an object
 * @param  {FormData} data The FormData object to serialize
 * @return {String}        The serialized form data
 */
function serialize (data) {
	let obj = {};
	for (let [key, value] of data) {
		if (obj[key] !== undefined) {
			if (!Array.isArray(obj[key])) {
				obj[key] = [obj[key]];
			}
			obj[key].push(value);
		} else {
			obj[key] = value;
		}
	}
	return obj;
}

function inputHandler (event) {
  let data = serialize(new FormData(form));
	localStorage.setItem(prefix, JSON.stringify(data));
}

function loadSaved () {
	let saved = JSON.parse(localStorage.getItem(prefix));
	if (!saved) return;

	let fields = form.elements;

	for (let field of fields) {
		if (!saved[field.name]) continue;
		field.value = saved[field.name];
	}
}

function clearStorage () {
	localStorage.removeItem(prefix);
}

loadSaved();
