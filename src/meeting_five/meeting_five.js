import "./meeting_five.scss";

//const key = "anton";
let name = prompt("Input your name");
//let str = "";
let quantity = 0;
// while (!name) {
//   name = prompt("Input your name");
// }

// function nameValidation() {
//   name === key ? console.log("Hello") : console.log("Wrong name");
// }

// nameValidation();

outerLoop: for (let i = 0; i < name.length; i++) {
  switch (name[i]) {
    case "а":
      console.log("Есть гласные");
      quantity += 1;
      break;
    case "о":
      console.log("Есть гласные");
      quantity += 1;
      break;
    case "у":
      console.log("Есть гласные");
      quantity += 1;
      break;
    case "и":
      console.log("Есть гласные");
      quantity += 1;
      break;
    case "э":
      console.log("Есть гласные");
      quantity += 1;
      break;
    case "ы":
      console.log("Есть гласные");
      quantity += 1;
      break;
    case "е":
      console.log("Есть гласные");
      quantity += 1;
      break;
    default:
      console.log("Нет гласных");
      quantity;
      break;
  }
}

console.log(quantity);

// console.log(name.toUpperCase());

// for (let i = 0; i < name.length; i++) {
//   str += "*";
// }

// console.log(str);
