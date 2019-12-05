import "./hangman.scss";

let words = ["javascript", "monkey", "amazing", "pancake"];
let word = words[Math.floor(Math.random() * words.length)];
let attemps = 10;

let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray.push("_");
}

let remainingLetters = word.length;

while (remainingLetters > 0 && attemps > 0) {
  alert(answerArray.join(" ") + ` \n attemps: ${attemps}`);

  let guess = prompt("Gues letter");
  if (guess) {
    guess = guess.toLowerCase();
  }

  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Please enter single letter");
  } else {
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess && answerArray[j] === "_") {
        answerArray[j] = guess;
        remainingLetters--;
        console.log(remainingLetters);
      }
    }
    attemps--;
  }
}
alert(answerArray.join(" "));

attemps > 0 ? alert("Congratulations") : alert("Try again");
