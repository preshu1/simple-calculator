const firstInput = document.querySelector("#firstNum");
const secondInput = document.querySelector("#secondNum");
const reset = document.getElementById("reset");

//const operator = document.querySelectorAll(".operator");
const addition = document.querySelector("#add");
const subtraction = document.querySelector("#sub");
const multiply = document.querySelector("#mul");
const divide = document.querySelector("#div");
const result = document.querySelector("#result");

let value = 0;
//function to handle operation
function calculate(operator) {
  const firstNum = parseFloat(firstInput.value);
  const secondNum = parseFloat(secondInput.value);

  //check if the numbers are valid
  if (isNaN(firstNum) || isNaN(secondNum)) {
    result.textContent = "please enter a valid number";
    return;
  }

  if (operator === "add") {
    value = firstNum + secondNum;
  } else if (operator === "sub") {
    value = firstNum - secondNum;
  } else if (operator === "mul") {
    value = firstNum * secondNum;
  } else if (operator === "div") {
    if (secondNum === 0) {
      result.textContent = "Sorry can't divide by zero";
      return;
    }
    value = firstNum / secondNum;
  }
  result.textContent = value;
}

//calling function and adding event listener to each button
addition.addEventListener("click", () => calculate("add"));
subtraction.addEventListener("click", () => calculate("sub"));
multiply.addEventListener("click", () => calculate("mul"));
divide.addEventListener("click", () => calculate("div"));

reset.addEventListener("click", function () {
  firstInput.value = "";
  secondInput.value = "";
  result.textContent = 0;
  value = 0;
  firstInput.focus();
});
