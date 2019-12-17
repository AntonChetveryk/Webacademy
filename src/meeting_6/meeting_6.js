import "./meeting_6.scss";

const car = document.querySelector(".car");

car.style.left = "1px";
car.onclick = () => {
  console.log(car.style.left);
  car.style.position = "relative";
  car.style.left = `${parseFloat(car.style.left) + 20}px`;
};

const el = document.createElement("div");
const btn = document.querySelector(".btn");
const body = document.querySelector("body");
el.style.width = "100px";
el.style.height = "100px";
el.style.background = "red";
el.textContent = "Hello";

btn.onclick = () => {
  console.log("Hello");
  body.appendChild(el);
};
