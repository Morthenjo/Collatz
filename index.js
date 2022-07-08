// program to print collatz
// take input from the user
const lowerNumber = document.getElementById("lowerNumber");
const higherNumber = document.getElementById("higherNumber");
const button = document.getElementById("button");
const clear = document.getElementById("clear");
const collatzEl = document.getElementById("primtall");
let arr = [];
function readInputLow() {
  return lowerNumber.value;
}
function readInputHigh() {
  return higherNumber.value;
}

button.addEventListener("click", () => {
  collatz(readInputLow());
});

function collatz(n) {
  if (n <= 0) {
    throw Error("Only positive numbers are allowed");
  }
  let numOfSteps = 0;
  let result = n;
  while (result !== 1) {
    if (result % 2 === 0) {
      result = result / 2;
    } else {
      result = result * 3 + 1;
      arr.push(result);
    }
    numOfSteps++;
  }

  let largest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  collatzEl.textContent = `Utfører Collatz funksjonen på ${readInputLow()}
  Antall steg før tallet endte på 1: ${numOfSteps}
  Høyeste tall nådd i sekvensen: ${largest}`;
}

clear.addEventListener("click", () => {
  collatzEl.textContent = "";
});
