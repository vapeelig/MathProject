function getRandomTsCode() {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operators = ['+', '-', '*', '/', '%'];
  const variables = ['x', 'y', 'z'];

  let code = '';

  for (let i = 0; i < 10; i++) {
    code += numbers[Math.floor(Math.random() * numbers.length)] + operators[Math.floor(Math.random() * operators.length)];
  }

  return code;
}
