// Define variables
let section2 = document.querySelector('.section2');
let dotBody = document.querySelector('.dotExerciseBody');
let box = document.querySelector(".box");
let buttonMoveBox = document.getElementById('btnMoveBox');
let point = document.getElementById('coordinates');
let dot = document.getElementById('dot');
let id = null; // id will be a parameter for the clearInterval() method inside the moveBox() function below

// Declare functions
function moveBox() {
  buttonMoveBox.innerHTML = 'Reset';
  let pos = 125; // initialize position of the box element inside section 1
  const boxFinalPosition = 350; // define final position of the box element
  clearInterval(id);
  id = setInterval(frame, 10); // use this to repeatedly call a function with a time delay (in ms) beteween each call
  function frame() {
    if (pos == boxFinalPosition) {     // test: has the box reached its final position?
      clearInterval(id);
    } else {
      pos++;
      box.style.top = pos + 'px';
      box.style.left = pos + 'px';
    }
  }
}
function btnMouseEnterStyleChanges() {
  buttonMoveBox.style.cursor = 'pointer';
  buttonMoveBox.style.opacity = '.7'
}
function btnMouseLeaveStyleChanges() {
  buttonMoveBox.style.opacity = '1';
}
function clickLocation(event) {
  // detect onclick events and handle them
  point.innerHTML = event.offsetX + ", " + event.offsetY;
  // see the JS console for more output information
  console.log("Client: ", event.clientX , event.clientY);
  console.log("Page: ", event.pageX , event.pageY);
  console.log("Screen: " , event.screenX, event.screenY);
  console.log("Event Object: ", event);
}
function sec2MouseEnterStyleChanges() {
  section2.style.cursor = 'crosshair';
}
function moveDot(event) {
  dot.style.transform = `translateY(${event.clientY - 25}px)`;
  dot.style.transform += `translateX(${event.clientX - 25}px)`;
  dot.style.opacity = 1;;
}

// Add events 
buttonMoveBox.onclick = moveBox;
buttonMoveBox.onmouseenter = btnMouseEnterStyleChanges;
buttonMoveBox.onmouseleave = btnMouseLeaveStyleChanges;
section2.onclick = clickLocation;
section2.onmouseenter = sec2MouseEnterStyleChanges;
dotBody.onclick = moveDot;
