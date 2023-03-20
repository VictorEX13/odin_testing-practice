import capitalize from "./capitalize";

test("capitalizes a string", () => {
  const testStr = "tEStiNG";
  expect(capitalize(testStr)).toEqual("Testing");
});
