// Define variables
let box = document.querySelector(".box");
let btnMoveBox = document.getElementById("myButton");
let clickDemo = document.querySelector('.section2');
let point = document.querySelector('.point');

// Functions
function animation() {
  box.classList.toggle('move-box');
  btnMoveBox.innerHTML = "Pause";
}
function createPointer() {
  btnMoveBox.style.cursor = 'pointer';
}
function clickPosition(event) {
  // detect onclick events and handle them
  point.innerHTML = event.offsetX + ", " + event.effsetY;
  // see the JS console for more output information
  console.log("Client: ", event.clientX , event.clientY);
  console.log("Page: ", event.pageX , event.pageY);
  console.log("Screen: " , event.screenX, event.screenY);
  console.log("Event Object: ", event);
}

// Add events 
btnMoveBox.onclick = animation;
btnMoveBox.onmouseover = createPointer;
clickDemo.addEventListener = ('click', clickPosition);

