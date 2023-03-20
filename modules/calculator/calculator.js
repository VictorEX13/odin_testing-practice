const Calculator = () => {
  const add = (operand1, operand2) => {
    return operand1 + operand2;
  };

  const subtract = (operand1, operand2) => {
    return operand1 - operand2;
  };

  const divide = (operand1, operand2) => {
    return operand1 / operand2;
  };

  const multiply = (operand1, operand2) => {
    return operand1 * operand2;
  };

  return { add, subtract, divide, multiply };
};

export default Calculator;
