// const ONE = document.getElementById("one");
// const TWO = document.getElementById("two");
// const THREE = document.getElementById("three");
// const FOUR = document.getElementById("four");
// const FIVE = document.getElementById("five");
// const SIX = document.getElementById("six");
// const SEVEN = document.getElementById("seven");
// const EIGHT = document.getElementById("eight");
// const NINE = document.getElementById("nine");
// const ZERO = document.getElementById("zero");

const EQUALS = document.getElementById("equals");

const OPERATIONS = {
  PLUS: document.getElementById("addition"),
  MINUS: document.getElementById("sub"),
  MULTI: document.getElementById("multi"),
  POWER: document.getElementById("power"),
  SLASH: document.getElementById("devision"),
};

// const operation_array = [
//   OPERATIONS.PLUS,
//   OPERATIONS.MINUS,
//   OPERATIONS.MULTI,
//   OPERATIONS.POWER,
//   OPERATIONS.SLASH,
//   OPERATIONS.EQUALS,
// ];

const INPUT = document.getElementById("input");

const BUTTON = document.getElementsByClassName("btn");

let inputValue = [];

let beforeCalculation = [];

let previousValue = [];

let x, y;

let calc = {
  add: function (x, y) {
    return x + y;
  },
  sub: function (x, y) {
    return x - y;
  },
  multi: function (x, y) {
    return x * y;
  },
  division: function (x, y) {
    return x / y;
  },
  label: function (x, y, z, v) {
    return v + ":" + " " + x + " " + z + " " + y + " =";
  },
  show: function (x, y) {
    console.log(this.label(x, y, "+", "addition"), this.add(x, y));
    console.log(calc.label(x, y, "-", "subtraction"), calc.sub(x, y));
    console.log(calc.label(x, y, "*", "multiplication"), calc.multi(x, y));
    console.log(calc.label(x, y, "/", "division"), calc.division(x, y));
  },
};

for (let i = 0; i < BUTTON.length; i++) {
  BUTTON[i].addEventListener("click", (e) => {
    inputValue.push(e.target.innerHTML);
    INPUT.value = inputValue.join("");
  });
}

for (let operation in OPERATIONS) {
  OPERATIONS[operation].addEventListener("click", (e) => {
    let value = INPUT.value;
    value = value
      .split("")
      .slice(0, value.length - 1)
      .join("");
    if (value.length === 0) {
      beforeCalculation.push([value]);
      beforeCalculation.push([e.target.innerHTML]);
    }
    beforeCalculation.push([
      value.split("").slice(0, previousValue.length + 1),
    ]);
    beforeCalculation.push([e.target.innerHTML]);
    console.log(beforeCalculation);
    previousValue = value;
    console.log(previousValue);
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    inputValue.pop();
    INPUT.value = inputValue.join("");
  }
});
