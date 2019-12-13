//альтернатива for of
//перезаписать обьект

//Task 1
import "./lesson_11_hw.scss";

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

//Task 2
let user = {};
user.name = "vasya";
//user.surname = "petrov";
user.name = "serg";
delete user.name;

//Task 3
function isEmpty(obj) {
  for (let key in obj) {
    if (key) {
      return false;
    }
  }
  return true;
}

//Task 4

const salaries = {
  John: 400,
  Jack: 20000,
  test: "asdasda"
};

function calc(salaries) {
  let sum = 0;

  for (let salary in salaries) {
    if (typeof salaries[salary] === "number") {
      sum += salaries[salary];
    }
  }
  return sum;
}

//Task 5

function getMaxSalary(salaries) {
  let maxSalary = 0;
  for (let salary in salaries) {
    if (salaries[salary] > maxSalary) {
      maxSalary += salaries[salary];
    }
    return maxSalary;
  }
}

//Task 6

function multiplyNumeric(salaries) {
  for (let salary in salaries) {
    if (!isNaN(salaries[salary])) {
      salaries[salary] *= 2;
    }
  }
  return salaries;
}

//Task 7
const arr = [1, 2, 3, 4, 5];
function getRandomFromArr(arr) {
  let random = randomInteger(arr[0], arr[arr.length - 1]);
  console.log(random);
}

//Task 8

function gerArr() {
  while (true) {
    let arr = [];
    let number = +prompt("Input namber");
    console.log(number);
    if (number === 0 || number === false || number === "" || isNaN(number)) {
      break;
    }
    arr.push(number);
  }
}

//Task 9
function find(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

//Task 10

function filterRange(arr, a, b) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > a && arr[i] < b) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(filterRange(arr, 1, 5));
