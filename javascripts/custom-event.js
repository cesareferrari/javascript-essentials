// create the event
let event = new CustomEvent('my-custom-event', {
  bubbles: true,
  cancelable: true,
  detail: "This is awesome. I could also be an object or array."
});

// add event listener before the event is dispatched or it won't work
document.addEventListener("my-custom-event", function (event) {
  console.log(event.detail);
})

// emit the event
document.dispatchEvent(event);


/**
 * Emit a custom event
 * @param {String} type      the event type
 * @param {*}      detail    any detail to pass along with the event
*/

function emit (type, detail) {

  // create a new event
  let event = new CustomEvent(type, {
    bubbles: true,
    cancelable: true,
    detail: detail
  })

  // dispatch the event
  return document.dispatchEvent(event);
}

document.addEventListener('my-second-event', (event) => {
  console.log(event);
})

document.addEventListener('my-other-custom-event', (event) => {
  console.log(event);
})

emit('my-second-event');
emit('my-other-custom-event', {
  name: "Merlin"
})
