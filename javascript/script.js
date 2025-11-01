const firstInput = document.querySelector("#firstNum");
const secondInput = document.querySelector("#secondNum");
const reset = document.getElementById("reset");

//const operator = document.querySelectorAll(".operator");
const addition = document.querySelector("#add");
const subtraction = document.querySelector("#sub");
const multiply = document.querySelector("#mul");
const divide = document.querySelector("#div");
const result = document.querySelector("#result");

value = 0;
//adding eventListener to each button
addition.addEventListener("click", function () {
  const firstNum = parseFloat(firstInput.value);
  const secondNum = parseFloat(secondInput.value);
  value = firstNum + secondNum;
  result.textContent = `${value}`;
});

//for subtraction
subtraction.addEventListener("click", function () {
  const firstNum = parseFloat(firstInput.value);
  const secondNum = parseFloat(secondInput.value);
  value = firstNum - secondNum;
  result.textContent = `${value}`;
});

// for multiplication
multiply.addEventListener("click", function () {
  const firstNum = parseFloat(firstInput.value);
  const secondNum = parseFloat(secondInput.value);
  value = firstNum * secondNum;
  result.textContent = `${value}`;
});

//for division
divide.addEventListener("click", function () {
  const firstNum = parseFloat(firstInput.value);
  const secondNum = parseFloat(secondInput.value);

  if (secondNum === 0) {
    result.textContent = "sorry can't divide by zero!";
  } else {
    value = firstNum / secondNum;
    result.textContent = `${value}`;
  }
});

reset.addEventListener("click", function () {
  firstInput.value = "";
  secondInput.value = "";
  result.textContent = 0;
  value = 0;
  firstInput.focus();
});
