class Calculator {
  constructor() {
    // Ваш код здесь
  }
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    if (b === 0) return "На ноль делить нельзя";
    return a / b;
  }
}

const calc =  new Calculator();
console.log(calc.add(5, 10));
console.log(calc.subtract(5, 10));
console.log(calc.multiply(5, 10));
console.log(calc.divide(5, 0));
console.log(calc.divide(5, 5));
