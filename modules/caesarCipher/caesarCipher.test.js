import caesarCipher from "./caesarCipher";

test("encrypt", () => {
  const testStr = "testing";
  const shiftFactor = 2;
  expect(caesarCipher(testStr, shiftFactor)).toEqual("vguvkpi");
});

test("encrypt wrapping from z to a", () => {
  const testStr = "wxyz";
  const shiftFactor = 4;
  expect(caesarCipher(testStr, shiftFactor)).toEqual("abcd");
});

test("encrypt punctuations", () => {
  const testStr = "!@#^.";
  const shiftFactor = 5;
  expect(caesarCipher(testStr, shiftFactor)).toEqual("/&(!;");
});

test("encrypt numbers", () => {
  const testStr = "98765";
  const shiftFactor = 3;
  expect(caesarCipher(testStr, shiftFactor)).toEqual("21098");
});

test("encrypt with key = 0", () => {
  const testStr = "testing";
  const shiftFactor = 0;
  expect(caesarCipher(testStr, shiftFactor)).toEqual("testing");
});

test("encrypt non-supported characters", () => {
  const testStr = "§¬¢£";
  const shiftFactor = 10;
  expect(caesarCipher(testStr, shiftFactor)).toEqual("§¬¢£");
});
