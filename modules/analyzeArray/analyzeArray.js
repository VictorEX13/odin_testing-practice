function analyzeArray(arr) {
  if (arr.every((i) => typeof i === "number")) {
    return {
      average: arr.reduce((acc, curr) => acc + curr, 0) / arr.length,
      min: Math.min(...arr),
      max: Math.max(...arr),
      length: arr.length,
    };
  } else {
    throw new Error("The array must be an array of numbers!");
  }
}

export default analyzeArray;
