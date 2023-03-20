import reverseString from "./reverse";

test("Reverse a string", () => {
  const testStr = "reverse this";
  expect(reverseString(testStr)).toEqual("siht esrever");
});
