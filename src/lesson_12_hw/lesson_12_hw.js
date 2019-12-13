import "./lesson_12_hw.scss";

const colors = document.querySelectorAll(".colors");
const button = document.querySelector(".toggler");
const colorsArr = ["green", "yellow", "red"];

function toggleOn(button) {
  button.setAttribute("data-toggler-on", true);
  button.textContent = "Off";
}

function toggleOff(button) {
  button.removeAttribute("data-toggler-on");
  button.textContent = "On";
}

function toggleOnColor(colors, color) {
  colors[color].setAttribute("data-is-active-color", true);
}

function toggleOffColor(colors, color) {
  colors[color].removeAttribute("data-is-active-color");
}

console.log(typeof button.getAttribute("data-toggler-on"));

button.onclick = () => {
  console.log(typeof button.getAttribute("data-toggler-on"));
  button.getAttribute("data-toggler-on") ? toggleOff(button) : toggleOn(button);
  console.log(typeof button.getAttribute("data-toggler-on"));
  console.log("new click");
  for (let color = 0; color < colors.length; color++) {
    if (typeof button.getAttribute("data-toggler-on") === "string") {
      colors[color].onclick = () => console.log("Hello");
    }
  }
};

// const isActive = button.getAttribute("data-toggler-on");
//   console.log(isActive);
//   !isActive ? toggleOn(button) : toggleOff(button);
//   console.log(isActive);
//   for (let color = 0; color < colors.length; color++) {
//     let isActiveColor = button.getAttribute("data-is-active-color");
//     console.log(isActiveColor);
//     if (isActive) {
//       colors[color].onclick = () => {
//         if (!colors[color].getAttribute("data-is-active-color")) {
//           toggleOnColor(colors, color);
//           colors[color].style.backgroundColor = `${colorsArr[color]}`;
//         } else {
//           toggleOffColor(colors, color);
//           colors[color].style.background = "none";
//         }
//       };
//     }
//   }

console.log(typeof button.getAttribute("data-toggler-on") === "string");
