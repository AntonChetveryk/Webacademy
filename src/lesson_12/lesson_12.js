import "./lesson_12.scss";

const someButton = document.querySelector("button");

console.dir(someButton);

someButton.onclick = () => {
  someButton.style.background = "green";
};

someButton.onfocus = () => {
  console.log("onfocus");
};
