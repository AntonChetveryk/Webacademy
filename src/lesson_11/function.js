export const u = "u";
function add() {
  const a = 5;
  const b = 5;
  print(a, b);
}

function print(a, b) {
  display.textContent = a + b;
}
myButton.onclick = add;

export { add };
