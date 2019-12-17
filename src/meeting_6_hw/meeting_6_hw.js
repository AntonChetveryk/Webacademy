import "./meeting_6_hw.scss";

let quantity = Number(prompt("Input quantity of items"));

const getRandomNumber = max => {
  return Math.floor(Math.random() * max);
};

const getRandomColor = () => {
  return `rgb(${getRandomNumber(255)}, ${getRandomNumber(
    255
  )}, ${getRandomNumber(255)})`;
};

function creatElements() {
  for (let el = 0; el < quantity; el++) {
    let div = document.createElement("div");
    document.body.append(div);
    div.className = "item";
  }
}

creatElements();

function getFlicker() {
  let items = document.querySelectorAll(".item");
  for (let item = 0; item < items.length; item++) {
    items[item].style.background = getRandomColor();
  }
}

if (quantity !== 0 && quantity !== NaN) {
  let interval = setInterval(() => {
    getFlicker();
  }, 500);
} else {
  alert("Reload page and input number wich is more then 0");
}
