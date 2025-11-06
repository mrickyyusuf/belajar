/*
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

// btn.addEventListener("click", () => {
//   const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// });

// function changeBackground() {
//   const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// }

// btn.addEventListener("click", changeBackground);

// btn.removeEventListener("click", changeBackground);

// myElement.addEventListener("click", functionA);
// myElement.addEventListener("click", functionB);

// btn.onclick = () => {
//     const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//     document.body.style.backgroundColor = rndCol;
// }

function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;

// can't:
// Element.onclick = function1;
// Element.onclick = function2;

// don't use inline event handler (look in html)

// add event handler function no matter how many there were
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", bgChange);
}

// event objects
function bgChange(e) {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener("click", bgChange);

// extra properties in event objects (look at html file and code below)
const textBox = document.getElementById("textBox");
const output = document.getElementById("output");
textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}.`;
});

// preventing default behavior
const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.addEventListener("submit", (e) => {
  if (fname === "" || lname === "") {
    e.preventDefault();
    para.textContent = "You need to fill in both names!";
  }
});

// event bubbling
// what happens if we add a click event handler to the parent, then click the button?
const outputEB = document.getElementById("output");
function handleClick(e) {
  outputEB.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.getElementById("container");
container.addEventListener("click", handleClick);
const button = document.querySelector("button");
document.body.addEventListener("click", handleClick);
container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);
*/

// Prevent event bubbling with stopPropagation()
const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");
btn.addEventListener("click", () => box.classList.remove("hidden"));
video.addEventListener("click", (e) => {
  e.stopPropagation();
  video.play();
});
box.addEventListener("click", () => box.classList.add("hidden"));

// last: introducing event bubbling, next: event capture
