import reverseString from "./reverse";

test("Reverse a string", () => {
  const testStr = "reverse this";
  console.log(testStr);
  console.log(reverseString(testStr));
  expect(reverseString(testStr)).toEqual("siht esrever");
});
