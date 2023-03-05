// Define variables
const section2 = document.querySelector(".section2");
const dotBody = document.querySelector(".dotExerciseBody");
const box = document.querySelector(".box");
const buttonMoveBox = document.getElementById("btnMoveBox");
const point = document.getElementById("coordinates");
const dot = document.getElementById("dot");
let id = null; // id will be a parameter for the clearInterval() method inside the moveBox() function below

// Declare functions

// TB: Great job using setInterval to change top and left! However it is not nearly as smooth as animation since transform uses the GPU. Compare the dot animation to
//the box movement. BTW, setinterval is NOT reliable in giving 10ms speed.
//Good work messing with this. Sometimes we do need to use intervals to do some animations, but we try to avoid it's jank as much as possible.
function moveBox() {
    buttonMoveBox.innerHTML = "Reset";
    let pos = 125; // initialize position of the box element inside section 1
    const boxFinalPosition = 350; // define final position of the box element
    clearInterval(id);
    id = setInterval(frame, 10); // use this to repeatedly call a function with a time delay (in ms) beteween each call
    function frame() {
        if (pos == boxFinalPosition) {
            // test: has the box reached its final position?
            clearInterval(id);
        } else {
            pos++;
            box.style.top = pos + "px";
            box.style.left = pos + "px";
        }
    }
}

function btnMouseEnterStyleChanges() {
    buttonMoveBox.style.cursor = "pointer";
    buttonMoveBox.style.opacity = ".7";
}

function btnMouseLeaveStyleChanges() {
    buttonMoveBox.style.opacity = "1";
}

function clickLocation(event) {
    // detect onclick events and handle them
    point.innerHTML = event.offsetX + ", " + event.offsetY;
    // see the JS console for more output information
    console.log("Client: ", event.clientX, event.clientY);
    console.log("Page: ", event.pageX, event.pageY);
    console.log("Screen: ", event.screenX, event.screenY);
    console.log("Event Object: ", event);
}

function sec2MouseEnterStyleChanges() {
    section2.style.cursor = "crosshair";
}

//TB: to get the dot to go exactly to the click location, you
// need to account for the dot's original location on the page.
//moving it to be the first item in the body will fix this.
function moveDot(event) {
    // TB: offset X/Y will base the dot's position relative to its container.
    // In this case, it's more accurate than client X/Y.
    dot.style.transform = `translateY(${event.offsetY - 20}px)`;
    dot.style.transform += `translateX(${event.offsetX - 20}px)`;
    dot.style.opacity = 1;
}

// Add events

// TB: On the "dot" page you don't have this button, so it breaks your JS.
// see the console on load on dotExcercise.html. So to make this work, I'm
// doing a quick check if we are on the page with the button.
if (buttonMoveBox) {
    buttonMoveBox.onclick = moveBox;
    buttonMoveBox.onmouseenter = btnMouseEnterStyleChanges;
    buttonMoveBox.onmouseleave = btnMouseLeaveStyleChanges;
    section2.onclick = clickLocation;
    section2.onmouseenter = sec2MouseEnterStyleChanges;
}

dotBody.onclick = moveDot;
