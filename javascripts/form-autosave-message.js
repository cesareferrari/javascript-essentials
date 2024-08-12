let form = document.querySelector("#save-me");
let prefix = "autosave_fields";

// hold debouncer
let debounce, currentNotification;

form.addEventListener('input', inputHandler);
form.addEventListener('submit', clearStorage);

function showStatus () {
  // create the notification
  let notification = document.createElement('div');
  notification.setAttribute('aria-live', 'polite');

  form.append(notification);

  // add text after it's in the UI
  setTimeout(() => {
    notification.textContent = 'Your info has been automatically saved. You can complete and submit the form later';

    // if there's a current notification, remove it
    if (currentNotification) {
      currentNotification.remove();
    }

    currentNotification = notification;
  }, 1);

  // clear it after 6 seconds
  setTimeout(() => {
    notification.remove();
  }, 6000);
}

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

  // clear any existing debounced functions
  clearTimeout(debounce);

  // debounce saving the field
  debounce = setTimeout(() => {

    // serialize the form fields
    let data = serialize(new FormData(form));

    // stringify the object and save it to local storage
    localStorage.setItem(prefix, JSON.stringify(data));

    // show a data saved message
    showStatus();

  }, 1000);
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
