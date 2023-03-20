import Calculator from "./calculator";

const calculator = Calculator();

test("addition", () => {
  expect(calculator.add(50, 49)).toBe(99);
});

test("subtraction", () => {
  expect(calculator.subtract(579, 345)).toBe(234);
});

test("division", () => {
  expect(calculator.divide(4.5, 1.5)).toBe(3);
});

test("multiplication", () => {
  expect(calculator.multiply(3.2, 3)).toBeCloseTo(9.6);
});
