/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  let addNumber1 = Number(document.getElementById("add1").value);
  let addNumber2 = Number(document.getElementById("add2").value);

  document.getElementById("sum").value = add(addNumber1, addNumber2);
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function (number1, number2) {
  return number1 - number2;
};

const subtractNumbers = function () {
  let subNumber1 = Number(document.getElementById("subtract1").value);
  let subNumber2 = Number(document.getElementById("subtract2").value);

  document.getElementById("difference").value = subtract(
    subNumber1,
    subNumber2
  );
};

document
  .getElementById("subtractNumbers")
  .addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
  let multNumber1 = Number(document.getElementById("factor1").value);
  let multNumber2 = Number(document.getElementById("factor2").value);

  document.getElementById("product").value = multiply(multNumber1, multNumber2);
};

document
  .getElementById("multiplyNumbers")
  .addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */

function divide(number1, number2) {
  return number1 / number2;
}

function divideNumbers() {
  let divNumber1 = Number(document.getElementById("dividend").value);
  let divNumber2 = Number(document.getElementById("divisor").value);

  document.getElementById("quotient").value = divide(divNumber1, divNumber2);
}

document
  .getElementById("divideNumbers")
  .addEventListener("click", divideNumbers);

/* Decision Structure */

document.getElementById("getTotal").addEventListener("click", () => {
  let subtotal = Number(document.getElementById("subtotal").value);
  let membership = document.getElementById("member").checked;

  if (subtotal < 0) {
    console.log("Please enter a valid number");
  } else {
    if (membership) {
      subtotal -= subtotal * 0.2;
    }
  }

  document.getElementById("total").innerHTML = `\$${subtotal.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Output Source Array */
document.getElementById("array").innerHTML = array;

/* Output Odds Only Array */

document.getElementById("odds").innerHTML = array.filter(
  (value) => value % 2 == 1
);

/* Output Evens Only Array */

document.getElementById("evens").innerHTML = array.filter(
  (value) => value % 2 == 0
);

/* Output Sum of Org. Array */

document.getElementById("sumOfArray").innerHTML = array.reduce(
  (sum, number) => sum + number
);

/* Output Multiplied by 2 Array */

document.getElementById("multiplied").innerHTML = array.map(
  (value) => value * 2
);

/* Output Sum of Multiplied by 2 Array */

document.getElementById("sumOfMultiplied").innerHTML = array
  .map((value) => value * 2)
  .reduce((sum, number) => sum + number);
