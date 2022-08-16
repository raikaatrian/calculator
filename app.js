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

// const PLUS = document.getElementById("addition");
// const MINUS = document.getElementById("sub");
// const MULTI = document.getElementById("multi");
// const POWER = document.getElementById("power");
// const SLASH = document.getElementById("division");
// const EQUALS = document.getElementById("equals");

const INPUT = document.getElementById("input");

const BUTTON = document.getElementsByClassName("btn");

let inputValue = [];

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

/********************************
 * TASKS:
 * write a for loop that iterates over all of the buttons and adds to them an EVENTLISTER
 * refactor the eventHandler function in a way that you can give it the index and it changes
 *******************************/

for (let i = 0; i < BUTTON.length; i++) {
  BUTTON[i].addEventListener("click", (e) => {
    inputValue.push(e.target.innerHTML);
    INPUT.value = inputValue.join("");
  });
}
