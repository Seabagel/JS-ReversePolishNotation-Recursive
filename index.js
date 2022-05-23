let string = "123*+";

function recursivePolishMath(nextString, numbers) {
  if (isNum(nextString)) {
    let numbers_ = nextString.charAt(0) + numbers.toString();
    let nextString_ = nextString.substring(1, nextString.length);
    recursivePolishMath(nextString_, numbers_);
  }

  if (isOperator(nextString)) {
    let operators = nextString.split("");
    let numbers_ = numbers.split("").map(Number);
    let total = numbers_[0];

    for (let i = 0; i < operators.length; i++) {
      switch (operators[i]) {
        case "+":
          total += numbers_[i + 1];
          break;
        case "-":
          total -= numbers_[i + 1];
          break;
        case "/":
          total /= numbers_[i + 1];
          break;
        case "*":
          total *= numbers_[i + 1];
          break;
      }
    }

    console.log(`Operators: ${operators}`);
    console.log(`Numbers: ${numbers_}`);
    console.log(`Total: ${total}`);
  }
}

function isNum(val) {
  return !isNaN(val.charAt(0));
}

function isOperator(val) {
  let x = val.charAt(0);
  return x.includes("+") ||
    x.includes("-") ||
    x.includes("/") ||
    x.includes("*")
    ? true
    : false;
}

console.log(string);
recursivePolishMath(string, "");
