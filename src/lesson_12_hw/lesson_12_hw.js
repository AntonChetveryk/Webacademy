import "./lesson_12_hw.scss";

const colors = document.querySelectorAll(".colors");
const button = document.querySelector(".toggler");
const colorsArr = ["green", "yellow", "red"];
let globalEnabled = false;
let colorActiveGreen = true;
let colorActiveRed = true;
let colorActiveYellow = true;

function toggleOn(button) {
  button.textContent = "Off";
}

function toggleOff(button) {
  button.textContent = "On";
}

function resetColor(colors) {
  for (let color = 0; color < colors.length; color++) {
    colors[color].style.background = "none";
  }
}

for (let color = 0; color < colors.length; color++) {
  colors[color].onclick = () => {
    if (globalEnabled) {
      //resetColor(colors);
      switch (colors[color].className) {
        case "colors green":
          if (colorActiveGreen) {
            colors[color].style.background = "green";
            colorActiveGreen = false;
            break;
          } else {
            colors[color].style.background = "none";
            colorActiveGreen = true;
            break;
          }
        case "colors yellow":
          if (colorActiveYellow) {
            colors[color].style.background = "yellow";
            colorActiveYellow = false;
            break;
          } else {
            colors[color].style.background = "none";
            colorActiveYellow = true;
            break;
          }
        case "colors red":
          if (colorActiveRed) {
            colors[color].style.background = "red";
            colorActiveRed = false;
            break;
          } else {
            colors[color].style.background = "none";
            colorActiveRed = true;
            break;
          }
      }
    }
  };
}

button.onclick = () => {
  if (globalEnabled) {
    toggleOff(button);
    globalEnabled = false;
  } else {
    toggleOn(button);
    globalEnabled = true;
  }
};
