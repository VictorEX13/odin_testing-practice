import analyzeArray from "./analyzeArray";

test("average of the array's elements", () => {
  const arr = [1, 2, 3, 4, 5];
  expect(analyzeArray(arr).average).toBe(3);
});

test("smallest number in the array", () => {
  const arr = [0, 5, 143, 1000, 4];
  expect(analyzeArray(arr).min).toBe(0);
});

test("biggest number in the array", () => {
  const arr = [56, 111111, 7, 12466, 500];
  expect(analyzeArray(arr).max).toBe(111111);
});

test("length of the array", () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(analyzeArray(arr).length).toBe(10);
});

test("not an array of numbers", () => {
  const arr = [NaN, "dfw", "abc", true];
  expect(() => analyzeArray(arr)).toThrow(
    "The array must be an array of numbers!"
  );
});
