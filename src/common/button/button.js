import "./button.scss";

export const createButton = () => {
  const body = document.querySelector("body");
  const btn = document.createElement("button");
  let name;
  let message;
  btn.textContent = "Start";
  body.append(btn);
  btn.className = "btn";

  function getMessageAndName() {
    do {
      name = prompt("Введите имя");
    } while (name === null || name === "");

    do {
      message = prompt("Оставьте сообщение");
    } while (message === null || message === "");
  }

  function showMessage() {
    const div = document.createElement("div");
    const textMessage = document.createElement("div");
    const textName = document.createElement("div");
    getMessageAndName();
    btn.style.display = "none";
    div.className = "message";
    textMessage.className = "textMessage";
    textMessage.textContent = message;
    textName.className = "textName";
    textName.textContent = `Hello ${name}!`;
    div.append(textName);
    div.append(textMessage);
    document.body.append(div);
  }

  btn.onclick = showMessage;
};
